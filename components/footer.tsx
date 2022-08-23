import { BottomNavigation, Paper } from "@mui/material";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <Paper sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation className={styles.footer}>
        <p>
          programmed to perfection by&nbsp;{" "}
          <Link href="/">
            <a>developd</a>
          </Link>
          &nbsp; &copy; 2022
        </p>
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
