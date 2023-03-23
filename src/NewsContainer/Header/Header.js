import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="container-header">
      <h3>
        {" "}
        <a href=""> gnNews</a>
      </h3>
      <div>
        <button>button1</button>
        <button>button2</button>
      </div>
    </div>
  );
};

export default Header;
