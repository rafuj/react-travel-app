import React from "react";
import classes from "../styles/Counter.module.css";
export default function CounterItems({ title, image, count }) {
  return (
    <div className={classes.counter__item}>
      <div className={classes.counter__item__inner}>
        <div className={classes.counter__item__inner__cont}>
          <div className={classes.icon}>
            <img src={image} alt="counter" />
          </div>
          <h4 className={classes.counter__item__title}>
            <span>{count}</span>
            <span></span>
          </h4>
          <span className={classes.counter__item__info}>{title}</span>
        </div>
      </div>
    </div>
  );
}
