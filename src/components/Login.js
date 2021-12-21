import React from "react";
import image from "../assets/images/signup.svg";
import classes from "../styles/Contact.module.css";
import LoginForm from "./LoginForm";
import Section from "./Section";
export default function Login() {
  return (
    <Section className="pt-120 pb-120 bg--body">
      <div className="row gy-5">
        <div className="col-md-6">
          <img src={image} className="signUpImage" alt="signUpImage" />
        </div>
        <div className="col-md-6">
          <div className={`${classes.contact__area}`}>
            <div className={`${classes.contact__wrapper} bg--section`}>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
