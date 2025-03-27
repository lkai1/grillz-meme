import styles from "./TokenAddress.module.css"

const TokenAddress = () => {

	const tokenAddress = "7USDHmdsFsJGsrvuYWvYHKejJBneCLVk8hdMWVvb7VqA"

	return (
		<div className={styles.main}>
			<p className={styles.tokenAddressTitle}>SOLANA ADDRESS</p>
			<div className={styles.tokenAddressContainer}>
				<p className={styles.tokenAddressText}>{tokenAddress}</p>
				<button className={styles.tokenAddressTextCopyButton} onClick={() => {
					navigator.clipboard.writeText(tokenAddress)
				}}>Copy</button>
			</div>
		</div>
	)
}

export default TokenAddress