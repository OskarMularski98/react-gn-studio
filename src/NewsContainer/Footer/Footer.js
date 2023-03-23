import React, { useEffect, useState } from "react";
import "./Footer.scss";
const Footer = ({ data }) => {
  const today = new Date();
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  (function() {
    setTimeout(() => {
      setHour(today.getHours());
      setMinutes(today.getMinutes());
      setSeconds(today.getSeconds());
    }, 1000);
  })();
  return (
    <div className="container-footer">
      <p>
        Time: {hour} : {minutes} : {seconds}
      </p>{" "}
      <div>Total articles: {data.totalResults}</div>
    </div>
  );
};

export default Footer;
