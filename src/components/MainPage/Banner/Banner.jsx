import styles from "./Banner.module.css"

const Banner = () => {

	return (
		<div className={styles.bannerContainer}>
			<div className={styles.bannerImageContainer}>
				<img src="/grillz-gold-diamond.jpg" alt="image" className={styles.bannerImage} />
			</div>
			<p className={styles.bannerText}>{`In pop culture, a grill (most commonly referred to as grills or grillz), 
			also known as fronts or golds, 
			is a type of dental jewelry worn over the teeth. 
			Grills are made of metal and are generally removable but can also be permanent. 
			They were popularized by hip hop artists in New York City in the early 1980s, 
			and upgraded during the 1990s in Oakland, CA. 
			They became even more widely popular during the mid-2000s due to the rise of Southern hip hop rap and the more mainstream pop culture status hip hop attained. 
			Since then, grills have reached the mainstream; a "hard flex of both style and wealth, 
			grillz have always been a symbol of power and social status – right from its origins that can be traced back to over 4,000 years ago.
			"Sub-Saharan African people are said to have worn grills to show their status up until modern years. Although grills have been around for over 4,000 years,
			 the rise and fall of their popularity at different times in different countries is a reflection of fashion trends.`}
			</p>
		</div>
	)
}

export default Banner