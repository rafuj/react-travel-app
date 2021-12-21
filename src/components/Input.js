import React from "react";
import classes from "../styles/Input.module.css";
export default function Input({ className, textarea, label, ...rest }) {
  return (
    <>
      {label && (
        <label for={label} className={classes.formLabel}>
          {label}
        </label>
      )}
      {textarea ? (
        <textarea className={className} id={label} {...rest}></textarea>
      ) : (
        <input className={className} id={label} {...rest} />
      )}
    </>
  );
}
