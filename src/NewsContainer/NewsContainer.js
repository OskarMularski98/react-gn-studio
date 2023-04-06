import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import "./NewsContainer.scss";
import axios from "axios";

const NewsContainer = () => {
  const [data, setData] = useState({});
  async function getNews(country) {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getNews("pl");
  }, []);
  return (
    <div className="container-fluid col-12">
      <Header />
      <div>
        <Content getNews={getNews} data={data} />
        <Footer data={data} />
      </div>
    </div>
  );
};

export default NewsContainer;
