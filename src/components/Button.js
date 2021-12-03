import React from "react";
import classes from "../styles/Button.module.css";
export default function Button({
  text,
  outline,
  button,
  fullWidth,
  textBtn,
  link,
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
    </button>
  ) : (
    <a
      href={link}
      className={`${classes.cmnBtn} ${outline ? classes.btnOutline : ""} ${
        textBtn ? classes.textBtn : ""
      }`}
    >
      {text}
    </a>
  );
}
