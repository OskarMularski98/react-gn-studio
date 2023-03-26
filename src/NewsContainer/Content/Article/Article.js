import React, { useState } from "react";
import "./Article.scss";
const Article = ({ article }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [news, setNews] = useState({
    title: "",
    author: "",
    url: "",
    isHidden: true,
  });
  const NewsInfo = () => {
    setNews((prevState) => ({
      ...prevState,
      isHidden: true,
    }));
    setNews((prevState) => ({
      ...prevState,
      title: article.title,
      author: article.author,
      url: article.url,
      isHidden: false,
    }));
    console.log("news", news);
    console.log(article);
    setIsHidden("none");
  };
  return (
    <div className="container col-3">
      <div onClick={NewsInfo} className="container-article col-10">
        <div>
          <h5>{article.title}</h5>
          <h6>source: {article.source.name} </h6>
          <p>date: {article.publishedAt}</p>
        </div>
        <img src={article.urlToImage} alt="" />
      </div>
      <div
        className="popup col-4"
        style={{ display: news.isHidden ? "none" : "block" }}
      >
        <h2>Title : {news.title}</h2>
        <h5>Author: {news.author}</h5>
        <h6>url: {news.url}</h6>
      </div>
    </div>
  );
};

export default Article;
