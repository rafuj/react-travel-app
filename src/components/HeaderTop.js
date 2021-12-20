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
              <a href="#0" className="text--base">
                demo@demo.com
              </a>
            </li>
            <li>
              <span className="name">Call Us: </span>
              <a href="#0" className="text--base">
                {" "}
                959-595-959
              </a>
            </li>
          </ul>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
