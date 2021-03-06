import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to={`/${props.pageOne}`}>
      {props.brand}
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link
          className={
            window.location.pathname === "/search"
              ? "nav-item nav-link active"
              : "nav-item nav-link"
          }
          to={`/${props.pageOne}`}
        >
          {props.pageOne}
        </Link>

        <Link
          className={
            window.location.pathname === "/saved"
              ? "nav-item nav-link active"
              : "nav-item nav-link"
          }
          to={`/${props.pageTwo}`}
        >
          {props.pageTwo}
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
