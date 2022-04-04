import React from "react";
import { Link } from "react-router-dom";
// import styles from "./Navbar.module.css"; bu neden olmadi arastiralim guzelce ogrenelim tamam ?
const Navbar = () => {
  return (
    <div className="container">
      <div className="left">
        <Link to="/">Home</Link>
      </div>

      <div className="right">
        <Link to="/about">About</Link>
        <a
          href="https://github.com/eminbulbul"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
