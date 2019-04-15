import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="landing-bg">
    <div className="skewed-bg"></div>
    <div className="landing-content">
      <h1>DG Books</h1>
      <h4 id="headtext">Find Books | Save Books</h4>
      <Link to="/Search">
        <span id="landing-btn">Enter</span>
      </Link>
    </div>
  </div>
);

export default Landing;
