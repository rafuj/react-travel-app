import React, { useState } from "react";
import { BiUserPin } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
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
  const { currentUser } = useAuth();

  return (
    <>
      <div className={`${classes.menuArea} ${menu ? classes.active : ""}`}>
        <div className={classes.menuClose} onClick={changeState}>
          <FaTimes />
        </div>
        <ul className={classes.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to="/contact" className="active">
              Contact
            </Link>
          </li>
        </ul>
        <div
          className={`${classes.changeLanguage} d-md-none mt-4 justify-content-center`}
        >
          <div className="text-center text-white">
            <span className="me-2">
              <BiUserPin />
            </span>
            {currentUser ? (
              <Link to="/" className="text--base">
                Dashboard
              </Link>
            ) : (
              <>
                <Link className="text-white" to="/login">
                  Login
                </Link>
                <span className="mx-2">/</span>
                <Link className="text-white" to="/registration">
                  Create Account
                </Link>
              </>
            )}
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
