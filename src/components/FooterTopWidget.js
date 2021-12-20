import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Footer.module.css";

export default function FooterTopWidget({ title, links }) {
  const arr = links.split(",");
  return (
    <div className={classes.footer__widget}>
      <h6 className={classes.title}>{title}</h6>
      <ul>
        {arr.map((value, key) => (
          <li key={key}>
            <Link to="/">{value}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
