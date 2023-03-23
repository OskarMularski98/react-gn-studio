import React from "react";
import { countries } from "../../Countries/Countries";
import "./SideMenu.scss";
const SideMenu = ({ getNews }) => {
  const CountryHandler = async (country) => {
    await getNews(country);
  };
  return (
    <div className="container-side-menu">
      {" "}
      {countries.map((country) => (
        <div
          onClick={() => CountryHandler(country.code)}
          className="country-bar"
          key={country.code}
        >
          <img
            className="country-flag"
            src={`https://flagcdn.com/${country.code}.svg`}
            width="30"
            height="20"
            alt=""
          />
          <p>{country.name}</p>
        </div>
      ))}{" "}
    </div>
  );
};

export default SideMenu;
