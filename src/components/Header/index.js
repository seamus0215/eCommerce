import React from "react";
import "./styles.scss";

import Logo from "./../../assets/logo-monochrome.svg";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="monochrome logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
