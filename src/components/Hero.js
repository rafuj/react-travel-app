import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/about/hero-bg.jpg";
import classes from "../styles/Hero.module.css";
export default function Hero({ pageTitle, pathName }) {
  return (
    <section
      className={classes.hero__section}
      style={{ background: `url(${image}) no-repeat center center / cover` }}
    >
      <div className="container position-relative">
        <h3 className={classes.hero__title}>{pageTitle}</h3>
        <ul className={`${classes.breadcrumb} breadcrumb`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{pathName}</li>
        </ul>
      </div>
    </section>
  );
}
