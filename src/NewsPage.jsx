import styles from "./NewsPage.module.css";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { URL } from "./App.jsx";
const NewsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data.news.filter((e) => e.id == id));
      });
  }, []);

  return !data ? (
    <div className={styles.Loader}>Loading</div>
  ) : (
    <div className={styles.Page}>
      <img
        className={styles.Image}
        src={data[0].image}
        onerror="this.style.display='none'"
      ></img>
      <h1 className={styles.Heading}>{data[0].title}</h1>.
      <div className={styles.Description}>
        <p>
          Published on : {data[0].published}, By : <b>{data[0].author}</b>
        </p>
      </div>
      <div className={styles.contentSide}>
        <p>{data[0].description}</p>
        <div className={styles.Button}>
          <a href={data[0].url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
  //     data[0].url
  //   );
};
export default NewsPage;
