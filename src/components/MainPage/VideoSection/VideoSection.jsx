import styles from "./VideoSection.module.css";

const VideoSection = () => {
	return (
		<div className={styles.videoSectionContainer}>
			<div className={styles.imageAndLogoContainer}>
				<p className={styles.logoText}>$GRILLZ</p>
				<img src="/grillz-diamond.jpg" alt="image" className={styles.videoSectionImage} />
			</div>
			<video
				className={styles.video}
				autoPlay
				loop
			>
				<source src="/grillz-meme-video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default VideoSection;
