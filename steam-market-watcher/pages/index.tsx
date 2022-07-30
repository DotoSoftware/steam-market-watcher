import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ListItems from "../components/list-items/listItems";
import Sidebar from "../components/sidebar/sidebar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome</h1>
        <div>
          <div>
            <ListItems />
          </div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
