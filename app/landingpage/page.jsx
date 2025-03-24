"use client"

import styles from "./landingpage.module.css";
import { useRouter } from 'next/navigation'

const LandingPage = () => {

  const router = useRouter()

  const goToMainPage = () => {
    return router.push("/mainpage")
  }

  return (
    <div className={styles.main}>
      <div className={styles.openMainPageContainer}>
        <p className={styles.title}>You have something in your teeth</p>
        <button className={styles.openMainPageButton} onClick={() => { goToMainPage() }}>CHECK IT OUT</button>
      </div>
    </div>
  );
}

export default LandingPage