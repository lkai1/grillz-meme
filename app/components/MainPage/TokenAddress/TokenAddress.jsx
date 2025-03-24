import styles from "./TokenAddress.module.css"

const TokenAddress = () => {

	return (
		<div className={styles.main}>
			<p className={styles.tokenAddressTitle}>SOLANA ADDRESS</p>
			<div className={styles.tokenAddressContainer}>
				<p className={styles.tokenAddressText}>7USDHmdsFsJGsrvuYWvYHKejJBneCLVk8hdMWVvb7VqA</p>
				<button className={styles.tokenAddressTextCopyButton}>Copy</button>
			</div>
		</div>
	)
}

export default TokenAddress