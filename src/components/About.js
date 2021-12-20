import React from "react";
import image2 from "../assets/images/about/about.png";
import image from "../assets/images/about/discount.png";
import classes from "../styles/About.module.css";
import Button from "./Button";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
export default function About() {
  return (
    <Section className="pt-120 pb-120 overflow-hidden">
      <div className="row">
        <div className="col-lg-6">
          <SectionHeader
            title="Dicount On Multiple Tour"
            txt="Quas expedita eos cumque cupiditate recusandae distinctio aspernatur architecto quasi quisquam possimus nisi laudantium facilis."
          />
          <div className={classes.aboutThumbTwo}>
            <img src={image} className="w-100" alt="about" />
          </div>
          <Button text="Find Tour Plan" textBtn link="/packages" />
        </div>
        <div className="col-lg-6">
          <div className={classes.discount__thumb}>
            <img src={image2} alt="about" />
          </div>
        </div>
      </div>
    </Section>
  );
}
