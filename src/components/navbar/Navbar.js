import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="/">Home</Link>
      </div>

      <div className={styles.right}>
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
