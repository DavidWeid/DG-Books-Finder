import React from "react";
import "./banner.css";

const Banner = (props) => (
  <div
    className="banner-image"
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    <div className="banner-text">{props.children}</div>
  </div>
);

export default Banner;
