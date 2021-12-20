import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Footer.module.css";
export default function Copyright() {
  return (
    <div className="bg--dark">
      <div className="container">
        <div className={classes.copyrightArea}>
          <div className={classes.copyright}>
            © All Right Reserved by{" "}
            <Link to="/" className="text--base">
              Travelly
            </Link>
          </div>
          <ul className={classes.links}>
            <li>
              <Link to="/tos">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
