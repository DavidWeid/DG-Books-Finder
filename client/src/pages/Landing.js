import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="landing-bg">
    <div className="landing-content">
      <h1>Google Books</h1>
      <Link to="/Search">
        Enter
      </Link>
    </div>
  </div>
);

export default Landing;
