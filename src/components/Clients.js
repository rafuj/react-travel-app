import React from "react";
import classes from "../styles/Clients.module.css";

export default function Clients({ quote, name, designation }) {
  return (
    <div className={classes.clients__item}>
      <div className={`${classes.clients__item__content} py-md-4 py-lg-5`}>
        <blockquote>{quote}</blockquote>
        <h6 className="name">{name}</h6>
        <span className="info">{designation}</span>
      </div>
    </div>
  );
}
