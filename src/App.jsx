import { useEffect, useState } from "react";
import "./App.css";
import NewsCard from "./components/NewsCard";
import Navbar from "./components/NavBar";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`/apis/data.json`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.articles);
      });
  }, []);
  return (
    <>
      <Navbar />
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
    </>
  );
}

export default App;
