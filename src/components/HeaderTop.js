import React from "react";
import classes from "../styles/HeaderTop.module.css";
import SocialIcons from "./SocialIcons";
export default function HeaderTop() {
  return (
    <div className={classes.headerTop}>
      <div className="container">
        <div className={classes.header__top__wrapper}>
          <ul className={classes.topMenu}>
            <li>
              <span className="name">Email: </span>
              <span className="text--base">demo@demo.com</span>
            </li>
            <li>
              <span className="name">Call Us: </span>
              <span className="text--base"> 959-595-959</span>
            </li>
          </ul>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
