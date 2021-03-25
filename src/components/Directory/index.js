import React from "react";
import ShopMen from "./../../assets/Men.jpg";
import ShopWomen from "./../../assets/Women.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${ShopMen})` }}>
          <a href="/">Men</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${ShopWomen})` }}>
          <a href="/">Women</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
