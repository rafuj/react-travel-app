import React from "react";
import classes from "../styles/Input.module.css";
export default function Input({ className, textarea, label, ...rest }) {
  return (
    <>
      {label && (
        <label for="name" className={classes.formLabel}>
          {label}
        </label>
      )}
      {textarea ? (
        <textarea className={className} {...rest}></textarea>
      ) : (
        <input className={className} {...rest} />
      )}
    </>
  );
}
