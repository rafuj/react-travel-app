import React from "react";
import image from "../assets/images/sponsor/01.png";
import image2 from "../assets/images/sponsor/02.png";
import image3 from "../assets/images/sponsor/03.png";
import image4 from "../assets/images/sponsor/04.png";
import image5 from "../assets/images/sponsor/05.png";
import image6 from "../assets/images/sponsor/06.png";
import classes from "../styles/Sponsor.module.css";
import Section from "./Section";

export default function Sponsor() {
  return (
    <Section className="py-3 bg--section">
      <div className={`${classes.sponsorArea} d-flex flex-wrap`}>
        <div className={classes.sponsorItem}>
          <img src={image} alt="Sponsor" />
        </div>
        <div className={classes.sponsorItem}>
          <img src={image2} alt="Sponsor" />
        </div>
        <div className={classes.sponsorItem}>
          <img src={image3} alt="Sponsor" />
        </div>
        <div className={classes.sponsorItem}>
          <img src={image4} alt="Sponsor" />
        </div>
        <div className={classes.sponsorItem}>
          <img src={image5} alt="Sponsor" />
        </div>
        <div className={classes.sponsorItem}>
          <img src={image6} alt="Sponsor" />
        </div>
      </div>
    </Section>
  );
}
