import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Footer.module.css";
export default function FooterContactItem({ title, children }) {
  return (
    <div className={classes.footerCta__item}>
      <Link
        className={`${classes.footerCta__item__inner} text--white d-block`}
        to="/"
      >
        <div className={classes.icon}>{children}</div>
        <h6 className={classes.subtitle}>{title}</h6>
      </Link>
    </div>
  );
}
