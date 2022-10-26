import { setCookies, getCookie } from "cookies-next";

const STORAGE_KEY = "colorMode";

enum Colors {
  light = "light",
  dark = "dark",
}

export const colorModeConfig = {
  initialColorMode: Colors.light,
  useSystemColorMode: true,
};

export const ensureColorMode = (ctx: any) => {
  let cookie = getCookie(STORAGE_KEY, ctx);
  if (!cookie) {
    cookie = colorModeConfig.initialColorMode;
    setCookies(STORAGE_KEY, cookie, ctx);
  }
  return ctx.req.headers.cookie;
};
