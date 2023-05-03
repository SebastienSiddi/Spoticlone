import styles from "../styles/Songs.module.css";

function Song(props) {
  return (
    <div className={styles.song}>
      <img className={styles.songImg} src={props.img} />
      <div className={styles.songDesc}>
        <p className={styles.songTitle}>{props.title}</p>
        <p className={styles.songSource}>{props.source}</p>
      </div>
    </div>
  );
}

export default Song;
