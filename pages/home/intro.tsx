import Image from "next/image";
import styles from "../../styles/Intro.module.css";

const header = "/assets/header-img.jpg";
const logo = "/assets/transparent.png";
const Intro = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.imageWrapper}></div>
      <Image priority src={header} layout="fill" alt="chicago skyline" />
      <div className={styles.heroContent}>
        <Image
          priority
          className={styles.logoContent}
          src={logo}
          alt="developd logo"
          width="380"
          height="100"
        />
        <h1>Hey, I'm </h1>
        <h1 className={styles.name}>Cherron!</h1>
        <h1>Web Developer and owner of</h1>
        <h1 className={styles.name}>developd.</h1>
      </div>
    </div>
  );
};
export default Intro;
