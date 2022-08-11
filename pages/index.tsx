import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Intro from "./home/intro";
import Nav from "../components/nav/nav";
import About from "./home/about";
import Skills from "./home/skills";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>developd | programmed to perfection.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Intro />
      <About />
      <Skills />
      <footer className={styles.footer}>
        programmed to perfection by&nbsp;
        <Link href="/">
          <a>developd</a>
        </Link>
        &nbsp; &copy; 2022
      </footer>
    </div>
  );
};

export default Home;
