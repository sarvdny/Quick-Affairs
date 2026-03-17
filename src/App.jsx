import { useEffect, useState } from "react";
import styles from "./App.module.css";
import NewsCard from "./components/NewsCard";
import Navbar from "./components/NavBar";
import { Link } from "react-router-dom";
export const URL = "/apis/newdata.json";
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data.news);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.NewsComponent}>
        {!data ? (
          <div className={styles.LoadingScreen}>Loading..</div>
        ) : (
          data.map((newsItem) => (
            <Link
              key={newsItem.id}
              className={styles.link}
              to={`/news/${newsItem.id}`}
            >
              <NewsCard
                key={newsItem.id}
                ImageURL={newsItem.image}
                Headline={newsItem.title}
                NewsDescription={newsItem.description}
                urlToNews={newsItem.url}
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default App;
