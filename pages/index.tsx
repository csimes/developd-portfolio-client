import type { NextPage } from "next";
import Head from "next/head";
import Intro from "./home/intro";
import About from "./home/about";
import Skills from "./home/skills";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>developd | programmed to perfection.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <div className={styles.container}>
        <About />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
