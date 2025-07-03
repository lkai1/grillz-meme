import styles from "./VideoSection.module.css";

const VideoSection = () => {
	return (
		<div className={styles.videoSectionContainer}>
			<div className={styles.imageAndLogoContainer}>
				<p className={styles.logoText}>$GRILLZ</p>
				<img src={`${import.meta.env.BASE_URL}grillz-diamond.jpg`} alt="image" className={styles.videoSectionImage} />
			</div>
			<video
				className={styles.video}
				autoPlay
				loop
			>
				<source src={`${import.meta.env.BASE_URL}grillz-meme-video.mp4`} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default VideoSection;
