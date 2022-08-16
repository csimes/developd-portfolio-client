import { BottomNavigation } from "@mui/material";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <BottomNavigation className={styles.footer}>
      <p>
        programmed to perfection by&nbsp;{" "}
        <Link href="/">
          <a>developd</a>
        </Link>
        &nbsp; &copy; 2022
      </p>
    </BottomNavigation>
  );
};

export default Footer;
