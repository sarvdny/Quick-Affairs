import { useEffect, useState } from "react";
import "./App.css";
import NewsCard from "./components/NewsCard";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey={YOUR API KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.articles);
      });
  }, []);
  return (
    <div className="NewsComponent">
      {!data ? (
        <div className="LoadingScreen">Loading..</div>
      ) : (
        data.map((newsItem, idx) => (
          <NewsCard
            key={idx}
            ImageURL={newsItem.urlToImage}
            Headline={newsItem.title}
            NewsDescription={newsItem.description}
            urlToNews={newsItem.url}
          />
        ))
      )}
    </div>
  );
}

export default App;
