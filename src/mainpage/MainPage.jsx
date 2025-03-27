import styles from "./MainPage.module.css";
import Header from "../components/MainPage/Header/Header";
import Banner from "../components/MainPage/Banner/Banner";
import VideoSection from "../components/MainPage/VideoSection/VideoSection";
import TokenAddress from "../components/MainPage/TokenAddress/TokenAddress";
import Footer from "../components/MainPage/Footer/Footer";

const MainPage = () => {

	return (
		<div className={styles.main}>
			<audio autoPlay loop>
				<source src="/grillz-meme-music.mp3" type="audio/mp3" />
				Your browser does not support the audio tag.
			</audio>
			<Header />
			<Banner />
			<TokenAddress />
			<VideoSection />
			<Footer />
		</div>
	);
};

export default MainPage;
