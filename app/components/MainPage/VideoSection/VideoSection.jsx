"use client"

import styles from "./VideoSection.module.css";

const VideoSection = () => {
	return (
		<div className={styles.videoTextContainer}>
			<div className={styles.videoText}>
				{`The insertion of gems into teeth predates hip hop culture. Hip hop artists such as Raheem the Dream and Kilo Ali began wearing grills in the early 1980s;
New York-based Eddie Plein, owner of Famous Eddie's Gold Teeth, and Johnny Dang and Paul Wall are often credited with kickstarting and expanding the trend. 
Plein began adapting dental crowns from single teeth into multiple caps thus creating the first grills originally known as fronts or caps.
 His first notable celebrity customer was Just Ice who would popularize gold fronts by donning his custom teeth on the cover of his 1987 album Kool and Deadly photographed by Janette Beckman.
  The teeth would appear on both the front and back covers of the artwork.
With grills popularity rising, Plein made gold caps for Flavor Flav, Big Daddy Kane and Kool G. Rap.
 He later moved to Atlanta, where he designed ever-more-elaborate grills for rappers such as OutKast, Goodie Mob, Ludacris, and Lil Jon.
Grills remained popular in the Southern U.S., especially in Houston or Memphis, even as they rose and fell from popularity elsewhere,
 and the rise of Dirty South rappers in the 2000s spurred a nationwide grill trend. During this time, grills frequently appeared in hip hop music, 
most notably in the 2005 number-one single "Grillz," by Nelly, Paul Wall, Big Gipp, and Ali, and in other Paul Wall songs.
 Wall is known for his grill business as well as his rapping; his clients include Kanye West and Cam'ron.
Grills maintained their popularity into the 2010s, with French grillmaker Dolly Cohen creating custom oral jewelry for Barbados songstress Rihanna along Cara Delevingne and Rita Ora.
Custom grills maintained its popularity in the music industry, not just men but women, as well.
 Katy Perry, Beyonce, Madonna, Miley Cyrus, Lady Gaga are notable among female popstar celebrities to have donned grills.`}
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
