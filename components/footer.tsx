import Link from "next/link";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      programmed to perfection by&nbsp;
      <Link href="/">
        <a>developd</a>
      </Link>
      &nbsp; &copy; 2022
    </footer>
  );
};

export default Footer;
