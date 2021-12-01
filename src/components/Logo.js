import React from "react";
import image from "../assets/images/logo/logo-dark.png";
import classes from "../styles/Logo.module.css";
export default function Logo() {
  return (
    <div className={`${classes.logo} me-lg-4 me-auto`}>
      <a href="/">
        <img src={image} alt="logo" />
      </a>
    </div>
  );
}
