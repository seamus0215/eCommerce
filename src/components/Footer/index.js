import React from "react";
import Logo from "./../../assets/logo-monochrome.svg";
import "./styles.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="logoSpan">
          &nbsp;
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
