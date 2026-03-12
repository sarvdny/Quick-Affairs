import "./NewsCard.css";
function NewsCard(props) {
  return (
    <>
      <div className="News">
        <div className="CardImage">
          <img src={props.ImageURL} alt="Banner" />
        </div>

        <div className="TextSection">
          <div className="Headline">
            <h3 className="HeadlineText">{props.Headline}</h3>
          </div>
          <div className="NewsDescription">
            <p className="Description">{props.NewsDescription}</p>
          </div>
          <a
            href={props.urlToNews}
            target="_blank"
            rel="noopener noreferrer"
            className="ContinueBtn"
          >
            {"Continue Readings >"}
          </a>
        </div>
      </div>
    </>
  );
}
export default NewsCard;
