import React from "react";
import classes from "../styles/Footer.module.css";

export default function FooterContactItem({ title, children }) {
  return (
    <div className={classes.footerCta__item}>
      <a
        className={`${classes.footerCta__item__inner} text--white d-block`}
        href="#0"
      >
        <div className={classes.icon}>{children}</div>
        <h6 className={classes.subtitle}>{title}</h6>
      </a>
    </div>
  );
}
