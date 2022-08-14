import * as functions from "firebase-functions";
import * as firebase from "firebase-admin";
import * as puppeteer from "puppeteer";
import * as fs from "fs";
import {eachSeries} from "async";

firebase.initializeApp();
const firestore = firebase.firestore();
const storage = firebase.storage();

const PUPPETEER_OPTIONS = {
  headless: true,
  args: [
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--disable-setuid-sandbox",
    "--no-first-run",
    "--no-sandbox",
    "--no-zygote",
    "--single-process",
    "--proxy-server='direct://'",
    "--proxy-bypass-list=*",
    "--deterministic-fetch",
  ],
};

const openConnection = async () => {
  const browser = await puppeteer.launch(PUPPETEER_OPTIONS);
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"
  );
  await page.setViewport({ width: 1680, height: 1050 });
  return { browser, page };
};

const closeConnection = async (page: any, browser: any) => {
  page && (await page.close());
  browser && (await browser.close());
};

const saveScreenshotImage = async (filePath: string) => {
  const metadata = {
    contentType: "image/png",
    cacheControl: "max-age=31536000",
  };
  return storage.bucket().upload(
    filePath,
    {
      metadata: metadata,
    },
    (err, file, response) => {
      if (!err) {
        return fs.unlinkSync(filePath);
      }
      return response;
    }
  );
};

const appendSessionSteam = async (page: any) => {
  const cookies = await page.cookies();
  cookies.push({
    name: "webTradeEligibility",
    value: `%7B%22allowed%22%3A1%2C%22allowed_at_time%22%3A0%2C%22steamguard_required_days%22%3A15%2C%22new_device_cooldown_days%22%3A7%2C%22time_checked%22%3A${Math.floor(
      new Date().getTime() / 1000
    )}%7D`,
    domain: "steamcommunity.com",
    path: "/",
    expires: -1,
    size: 79,
    httpOnly: true,
    secure: true,
    session: true,
    sameSite: "None",
    sameParty: false,
    sourceScheme: "Secure",
    sourcePort: 443,
  });
  cookies.push({
    name: "steamLoginSecure",
    value: process.env.STEAM_USER_SESSION,
    domain: "steamcommunity.com",
    path: "/",
    expires: -1,
    size: 79,
    httpOnly: true,
    secure: true,
    session: true,
    sameSite: "None",
    sameParty: false,
    sourceScheme: "Secure",
    sourcePort: 443,
  });
  await page.setCookie(...cookies);
  await page.reload({ waitUntil: ["networkidle0", "load"] });
};

const openSteamItemPage = async (page: any, url: string, name: string) => {
  try {
    await page.goto(url, { waitUntil: "load" });

    const screenshotFilePath = `${name}.png`;
    await page.screenshot({
      path: screenshotFilePath,
      fullPage: true,
    });
    await saveScreenshotImage(screenshotFilePath);

    const listPrices = await page.$$eval(
      ".market_listing_price_with_fee",
      (prices: any) => {
        return Array.from(prices, (price: any) =>
          parseFloat(price.innerText.trim().replace(/[^0-9,-]+/g, ""))
        );
      }
    );
    if (listPrices && listPrices.length) {
      listPrices.sort();
      return listPrices[0];
    }
    return null;
  } catch (err: any) {
    functions.logger.log("goto url error: ", err.message);
    return null;
  }
};
const insertIntoFireStore = async (
  gameId: number,
  item: any,
  price: number,
  event: string
) => {
  try {
    const data = {
      time: Date.now(),
      price: price,
      event: event,
    };

    return firestore
      .collection(`games/${gameId}/items/${item.id}/prices`)
      .doc()
      .set(data);
  } catch (error) {
    functions.logger.log("insert into cloud firestore error :", error);
    return false;
  }
};

const startScrappingAllData = async (event: string = "") => {
  const { browser, page } = await openConnection();
  try {
    await page.goto("https://steamcommunity.com/market", {
      waitUntil: "load",
    });
    await appendSessionSteam(page);
    const cookies = await page.cookies();
    console.log("cookies: ", cookies);

    const games = await firestore.collection("games").get();

    // using eachSeries of caolan's async to make it synchonorously
    eachSeries(games, async (game: any, _callback: any) => {
      const items = await firestore.collection(`games/${game.id}/items`).get();

      eachSeries(items, async (item: any, __cb: any) => {
        const itemData = item.data();
        const price = await openSteamItemPage(
          page,
          itemData.url,
          itemData.name
        );
        if (price) {
          await insertIntoFireStore(game.id, item, price, event);
        }
      });
    });

    return true;
  } catch (error) {
    functions.logger.log("goto url error: ", error);
    return null;
  } finally {
    await closeConnection(page, browser);
  }
  
};
// https functions
exports.manualScrappingSteam = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const eventName = req.params.event || "";
  await startScrappingAllData(eventName);
  // Send back a message 
  res.json({ message: "Manual Importing Data from Steam Markets Completed!" });
});
// pub/sub
exports.scrappingDataMarket = functions.pubsub
  .schedule("0 0 12 * *")
  .onRun(async (context) => {
    await startScrappingAllData();
  });
