import React from "react";
import classes from "../styles/HeaderBottom.module.css";
import Logo from "./Logo";
import MenuArea from "./MenuArea";
export default function HeaderBottom() {
  return (
    <div className={classes.headerBottom}>
      <div className="header-area">
        <div className="container">
          <div className={classes.headerWrapper}>
            <Logo />
            <MenuArea />
          </div>
        </div>
      </div>
    </div>
  );
}
