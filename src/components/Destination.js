import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useDestination from "../hooks/useDestination";
import classes from "../styles/Destination.module.css";

export default function Destination() {
  const { loading, error, dest } = useDestination();

  return (
    <div className={classes.destination__wrapper}>
      {!loading && dest.length === 0 && <div>No Data Found</div>}
      {loading && <div>Loading ...</div>}
      {error && <div>There was an Error ...</div>}
      {!loading &&
        dest.length > 0 &&
        dest.slice(0, 7).map((item, i) => (
          <div className={classes.destination__item} key={item.city}>
            <Link to="/packages" className={classes.destination__item__inner}>
              <div className={classes.destination__item__thumb}>
                <img src={item.image} alt="destination" />
              </div>
              <div className={classes.destination__item__content}>
                <h5 className={classes.destination__item__title}>
                  {item.city}
                </h5>
                <div className={classes.rating}>
                  {Array.from({ length: item.rating }).map(() => (
                    <span key={Math.random(item[i])}>
                      <BsStarFill />
                    </span>
                  ))}
                  {Array.from({ length: 5 - item.rating }).map(() => (
                    <span key={Math.random(item[i])}>
                      <BsStar />
                    </span>
                  ))}
                </div>
                <span className="badge bg--base">{item.point} Destination</span>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}
