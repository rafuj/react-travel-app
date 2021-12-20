import React from "react";
import classes from "../styles/Footer.module.css";
export default function Copyright() {
  return (
    <div className="bg--dark">
      <div className="container">
        <div className={classes.copyrightArea}>
          <div className={classes.copyright}>
            © All Right Reserved by{" "}
            <a href="#0" className="text--base">
              Travelly
            </a>
          </div>
          <ul className={classes.links}>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
