import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/logo/logo-dark.png";
import classes from "../styles/Logo.module.css";
export default function Logo() {
  return (
    <div className={`${classes.logo} me-lg-4 me-auto`}>
      <Link to="/">
        <img src={image} alt="logo" />
      </Link>
    </div>
  );
}
