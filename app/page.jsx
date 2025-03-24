import LandingPage from "./landingpage/page";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.main}>
      <LandingPage />
    </div>
  );
}

export default Home