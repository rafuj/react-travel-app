import React from "react";
import classes from "../styles/SectionHeader.module.css";
export default function SectionHeader({ title, txt, center, whiteColor }) {
  return (
    <div
      className={`${classes.section__header} ${
        center
          ? "text-center ms-auto me-auto " + classes.section__header__center
          : ""
      } ${whiteColor ? "text-white" : ""}`}
    >
      <h3
        className={`${classes.section__header__title} ${
          whiteColor ? "text-white" : ""
        }`}
      >
        {title}
      </h3>
      <p className={classes.section__header__txt}>{txt}</p>
    </div>
  );
}
