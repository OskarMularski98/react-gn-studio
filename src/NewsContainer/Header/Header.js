import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="container-header">
      <h3>
        {" "}
        <a href=""> gnNews</a>
      </h3>
      <div className="btn-container">
        <button>
          <FontAwesomeIcon icon={faList} /> button1
        </button>
        <button>button2</button>
      </div>
    </div>
  );
};

export default Header;
