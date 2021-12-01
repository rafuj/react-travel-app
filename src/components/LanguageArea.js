import React from "react";
import { BsPerson } from "react-icons/bs";
import classes from "../styles/LanguageArea.module.css";
export default function LanguageArea() {
  return (
    <div className={`${classes.changeLanguage} me-3 me-lg-0`}>
      <div className="d-none d-sm-block">
        <span>
          <BsPerson />
        </span>
        <a href="login.html">Login</a>
        <a href="registration.html">Create Account</a>
      </div>
      <select className={classes.language}>
        <option value="en">English</option>
        <option value="bn">Bangla</option>
        <option value="pk">Urdu</option>
        <option value="ind">Hindi</option>
      </select>
    </div>
  );
}
