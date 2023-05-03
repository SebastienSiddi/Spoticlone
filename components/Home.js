import styles from "../styles/Home.module.css";
import Song from "./Songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faCirclePause } from "@fortawesome/free-regular-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const songsData = [
    { img: "bobmarley.png", title: "I shot the sheriff", source: "Bob Marley - LEGEND The Best Of", },
    { img: "iam.png", title: "Petit frère", source: "IAM - L'école du micro d'argent", },
    { img: "daftpunk.jpg", title: "Get Lucky", source: "Daft Punk - Random Access Memories", },
    { img: "acdc.jpg", title: "Hell Bell", source: "AC DC - Back in Black" },
    { img: "direstraits.png", title: "Sultans Of Swing", source: "Dire Straits - Brother In Arms", },
    { img: "ff.jpg", title: "Art de rue", source: "Fonky Family - Art de Rue" },
    { img: "koolandthegang.png", title: "Celebration", source: "Kool & The Gang - The Best Of", },
    { img: "michaeljackson.jpg", title: "The Girl Is Mine", source: "Michael Jackson - Thriller", },
    { img: "nirvana.png", title: "Come As You Are", source: "Nirvana - Nevermind", },
    { img: "oasis.jpg", title: "Wonderwall", source: "Oasis - What's the Story Morning Glory", },
    { img: "prince.jpg", title: "Purple Rain", source: "Prince - Purple Rain Remastered", },
  ];

  const songs = songsData.map((song) => {
    return <Song img={song.img} title={song.title} source={song.source} />;
  });

  return (
    <div>
      <main className={styles.main}>
        <content className={styles.content}>
          <div className={styles.contentLeft}>
            <img className={styles.logo} src={"Spotifylogo.png"} />
            <li className={styles.li}>Home</li>
            <li className={styles.li}>Search</li>
            <li className={styles.li}>Your Library</li>
            <h5 className={styles.h5}>PLAYLISTS</h5>
            <span className={styles.span}>.</span>
            <p className={styles.playlist}>RAP AMOUR TRISTE</p>
            <p className={styles.playlist}>Rain and Thunder Sounds⛈️</p>
            <p className={styles.playlist}>Sleep Music, Sleep Rain💤</p>
            <p className={styles.playlist}>Chill House | Lounge Relax</p>
            <p className={styles.playlist}>Chill House 2023</p>
            <p className={styles.playlist}>Funk Hits</p>
            <p className={styles.playlist}>Sport</p>
            <p className={styles.playlist}>Lofi Coders💻</p>
            <p className={styles.playlist}>Hits chill</p>
            <p className={styles.playlist}>Futurs Hits</p>
            <p className={styles.playlist}>Course</p>
          </div>
          <div className={styles.Maincontent}>
            <div className={styles.searchNuser}>
              <input
                className={styles.input}
                type="text"
                name="search"
                placeholder=" Search for Artists, Songs, or Podcasts"
              ></input>
              <div className={styles.user}>
                <img className={styles.userImg} src="user.jpg" />
                <p className={styles.userName}>Michael Scofield</p>
              </div>
            </div>

            <div className={styles.contentHeader}>
              <div className={styles.playlistImg}>
                <img className={styles.playlistLogo} src="playlistlogo.png" />
                <p className={styles.playlistText}>
                  The best songs for Freedom
                </p>
              </div>

              <div className={styles.contentHeaderText}>
                <p className={styles.playlistTitle}>PLAYLIST</p>
                <p className={styles.playlistName}>
                  The best songs for Freedom
                </p>
                <p className={styles.playlistDesc}>
                  One day you and me, we'll get on a boat and we'll be gone
                  forever...
                </p>
              </div>
            </div>
            <div className={styles.headerIcons}>
              <FontAwesomeIcon
                className={styles.faCirclePlay}
                icon={faCirclePlay}
              />
              <FontAwesomeIcon className={styles.faHeart} icon={faHeart} />
              <p className={styles.susp}>...</p>
            </div>
            {songs}
          </div>
          <div className={styles.footerBar}>
            <div className={styles.inPlay}>
              <img className={styles.songImg} src="blackeyedpeas.png" />
              <div className={styles.songDesc}>
                <p className={styles.songTitle}>I Gotta Feeling</p>
                <p className={styles.songAuthor}>Black Eyed Peas</p>
              </div>
            </div>
            <div className={styles.playing}></div>
            <div className={styles.commands}>
              <FontAwesomeIcon className={styles.faShuffle} icon={faShuffle} />
              <FontAwesomeIcon
                className={styles.faBackwardStep}
                icon={faBackwardStep}
              />
              <FontAwesomeIcon
                className={styles.faCirclePause}
                icon={faCirclePause}
              />
              <FontAwesomeIcon
                className={styles.faForwardStep}
                icon={faForwardStep}
              />
              <FontAwesomeIcon className={styles.faRepeat} icon={faRepeat} />
            </div>
            <div className={styles.menuVolume}>
              <FontAwesomeIcon className={styles.faBars} icon={faBars} />
              <FontAwesomeIcon
                className={styles.faVolumeLow}
                icon={faVolumeLow}
              />
              <input
                className={styles.slider}
                type="range"
                name="volume"
                min="0"
                max="100"
              />
            </div>
          </div>
        </content>
      </main>
    </div>
  );
}

export default Home;
