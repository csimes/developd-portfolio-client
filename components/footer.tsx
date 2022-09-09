import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        programmed to perfection by&nbsp;{" "}
        <Link href="/">
          <a>developd</a>
        </Link>
        &nbsp; &copy; 2022
      </p>
    </div>
  );
};

export default Footer;
