import React from "react";
import "./Article.scss";
const Article = ({ article }) => {
  return (
    <div className="container-article col-3">
      <div>
        <h5>{article.title}</h5>
        <h6>source: {article.source.name} </h6>
        <p>date: {article.publishedAt}</p>
      </div>
      <img src={article.urlToImage} alt="" />
    </div>
  );
};

export default Article;
