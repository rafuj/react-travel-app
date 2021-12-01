import React, { useState } from "react";
import { BiUserPin } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import classes from "../styles/Menu.module.css";
import LanguageArea from "./LanguageArea";

export default function MenuArea() {
  const [menu, setMenu] = useState(false);

  function changeState() {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  return (
    <>
      <div className={`${classes.menuArea} ${menu ? classes.active : ""}`}>
        <div className={classes.menuClose} onClick={changeState}>
          <FaTimes />
        </div>
        <ul className={classes.menu}>
          <li>
            <a href="#0">Home</a>
          </li>
          <li>
            <a href="#0" className=" active">
              Contact
            </a>
          </li>
        </ul>
        <div
          className={`${classes.changeLanguage} d-md-none mt-4 justify-content-center`}
        >
          <div className="text-center text-white">
            <span className="me-2">
              <BiUserPin />
            </span>
            <a href="#0" className="text--base">
              Dashboard
            </a>
          </div>
        </div>
      </div>
      <LanguageArea />
      <div
        className={`${classes.headerBar} ${
          menu ? classes.headerBarActive : ""
        } d-lg-none`}
        onClick={changeState}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
