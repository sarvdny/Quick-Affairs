import { Link } from "react-router-dom";
import styles from "./NewsCard.module.css";
// import { useState } from "react";
function NewsCard(props) {
  // const [imgUrl, setImgUrl] = useState("https://placehold.co/600x400/png");

  return (
    <div className={styles.News}>
      <div className={styles.CardImage}>
        <img className={styles.img} src={props.ImageURL} alt="Banner" />
      </div>

      <div className={styles.TextSection}>
        <div className={styles.Headline}>
          <h3 className={styles.HeadlineText}>{props.Headline}</h3>
        </div>
        <div className={styles.NewsDescription}>
          <p className={styles.Description}>{props.NewsDescription}</p>
        </div>
        <div
          href={props.urlToNews}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ContinueBtn}
        >
          {"Continue Readings >"}
        </div>
      </div>
    </div>
  );
}
export default NewsCard;
