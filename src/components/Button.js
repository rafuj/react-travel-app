import React from "react";
import classes from "../styles/Button.module.css";
export default function Button({ text, outline, button, fullWidth, ...rest }) {
  return button ? (
    <button
      {...rest}
      className={`${classes.cmnBtn} ${outline ? classes.btnOutline : ""} ${
        fullWidth ? "w-100" : ""
      }`}
    >
      {text}
    </button>
  ) : (
    <a
      href="#0"
      className={`${classes.cmnBtn} ${outline ? classes.btnOutline : ""}`}
    >
      {text}
    </a>
  );
}
