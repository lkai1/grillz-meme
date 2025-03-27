import styles from "./Footer.module.css"

const Footer = () => {

	return (
		<div className={styles.main}>
			<p className={styles.descriptionText}>Find us on: </p>
			<div className={styles.linkImageContainer} onClick={() => {
				window.open("https://web.telegram.org/a/", "_blank", "noopener,noreferrer");
			}}>
				<img src="/telegram_logo_transparent.png" alt="image" className={styles.linkImage} />
			</div>
			<div className={styles.linkImageContainer} onClick={() => {
				window.open("https://dexscreener.com/", "_blank", "noopener,noreferrer");
			}}>
				<img src="/dexscreener_logo_transparent.png" alt="image" className={styles.linkImage} />
			</div>
		</div>
	)
}

export default Footer