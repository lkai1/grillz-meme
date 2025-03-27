import MainPage from "../mainpage/MainPage.jsx";
import styles from "./LandingPage.module.css";
import { useState } from "react"

const LandingPage = () => {

  const [pageState, setPageState] = useState(1)

  const goToMainPage = () => {
    setPageState(2)
  }

  const getLandingPage = () => {
    return (
      <div className={styles.main}>
        <p className={styles.title}>You have something in your teeth</p>
        <button className={styles.openMainPageButton} onClick={() => { goToMainPage() }}>CHECK IT OUT</button>
      </div>
    )
  }

  const getMainPage = () => {
    return (
      <MainPage />
    )
  }

  return (
    <>
      {pageState === 1 ? getLandingPage() : getMainPage()}
    </>
  );
}

export default LandingPage