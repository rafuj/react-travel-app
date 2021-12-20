import React from "react";
import { FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import classes from "../styles/Contact.module.css";
import Button from "./Button";
import Input from "./Input";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
export default function Contact() {
  return (
    <Section className="contact__section pt-120 pb-120 pb-lg-0">
      <div className="container">
        <div className={classes.contact__area}>
          <div className={classes.contact__content}>
            <SectionHeader
              title="Get In Touch With Us"
              txt="
                Necessitatibus sapiente ex earum omnis, commodi doloribus!"
            />
            <div className={classes.contact__content__botom}>
              <h5 className={classes.subtitle}>More Information</h5>
              <ul className={classes.contact__info}>
                <li>
                  <div className={`${classes.icon} border`}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className={classes.cont}>
                    <h6 className={classes.name}>Address</h6>
                    <span className={classes.info}>
                      1205 Tipu Sultan Road, Malibag, Dhaka
                    </span>
                  </div>
                </li>
                <li>
                  <div className={`${classes.icon} border`}>
                    <FaMailBulk />
                  </div>
                  <div className={classes.cont}>
                    <h6 className={classes.name}>Email</h6>
                    <span className={`${classes.info} text--base`}>
                      contact@demo.com
                    </span>
                  </div>
                </li>
                <li>
                  <div className={`${classes.icon} border`}>
                    <FaPhoneAlt />
                  </div>
                  <div className={classes.cont}>
                    <h6 className={classes.name}>Phone</h6>
                    <span className={`${classes.info} text--base`}>
                      (123) 456 - 7890
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${classes.contact__wrapper} bg--section`}>
            <SectionHeader
              title="Contact US"
              txt="
                Do not miss the current offers until the end of the Month."
            />
            <form className={`${classes.contact__form} row`}>
              <div className="col-sm-6">
                <div className="form-group mb-3">
                  <Input
                    className={`${classes.formControl} form-control border`}
                    type="text"
                    label="Your Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group mb-3">
                  <Input
                    className={`${classes.formControl} form-control border`}
                    type="text"
                    label="Your Email Address"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group mb-3">
                  <Input
                    className={`${classes.formControl} form-control border`}
                    type="text"
                    label="Subject"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group mb-3">
                  <Input
                    className={`${classes.formControl} form-control border`}
                    type="text"
                    label="Your Phone"
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group mb-3">
                  <Input
                    textarea
                    name="message"
                    className={`${classes.formControl} form-control border`}
                    label="Your Message"
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <Button
                  button
                  text="Send Message"
                  type="submit"
                  className="cmnBtn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
