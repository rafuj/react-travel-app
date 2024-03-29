import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Button.module.css";
export default function Button({
  text,
  outline,
  button,
  fullWidth,
  textBtn,
  link,
  children,
  ...rest
}) {
  return button ? (
    <button
      {...rest}
      className={`${classes.cmnBtn} ${outline ? classes.btnOutline : ""} ${
        fullWidth ? "w-100" : ""
      } `}
    >
      {text}
      {children}
    </button>
  ) : (
    <Link
      to={link}
      className={`${classes.cmnBtn} ${outline ? classes.btnOutline : ""} ${
        textBtn ? classes.textBtn : ""
      }`}
    >
      {text}
    </Link>
  );
}
