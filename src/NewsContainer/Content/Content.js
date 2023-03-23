import React, { useEffect, useState } from "react";
import "./Content.scss";
import SideMenu from "../SideMenu/SideMenu";
import Article from "./Article/Article";
import { v4 as uuidv4 } from "uuid";
const Content = ({ data, getNews }) => {
  console.log(data);
  return (
    <div className="d-flex container-content col-12">
      <SideMenu getNews={getNews} />
      <div className="row justify-content-center col-11">
        {data &&
          data.articles?.map((article) => (
            <Article article={article} key={uuidv4()} />
          ))}
      </div>
    </div>
  );
};

export default Content;
