import styles from "./Header.module.css"

const Header = () => {

	return (
		<div className={styles.headerContainer}>
			<div className={styles.headerLogoContainer}>
				<p className={styles.headerLogo}>$GRILLZ</p>
			</div>
			<div className={styles.headerLinkImageContainers}>
				<p className={styles.linksText}>LINKS:</p>
				<div className={styles.headerLinkImageContainer} onClick={() => {
					window.open("https://web.telegram.org/a/", "_blank", "noopener,noreferrer");
				}}>
					<img src="/telegram_logo_transparent.png" alt="image" className={styles.headerLinkImage} />
				</div>
				<div className={styles.headerLinkImageContainer} onClick={() => {
					window.open("https://dexscreener.com/", "_blank", "noopener,noreferrer");
				}}>
					<img src="/dexscreener_logo_transparent.png" alt="image" className={styles.headerLinkImage} />
				</div>
			</div>
		</div>
	)
}

export default Header