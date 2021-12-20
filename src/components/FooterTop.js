import React from "react";
import classes from "../styles/Footer.module.css";
import FooterTopWidget from "./FooterTopWidget";
export default function FooterTop() {
  return (
    <div className={classes.footer__top}>
      <div className="container">
        <div className={classes.footer__wrapper}>
          <FooterTopWidget
            title="Family Trip"
            links="Cox's Bazar, Kolkata, Nilgiri - Nilachal"
          />
          <FooterTopWidget
            title="Tracking"
            links="Bandarban, Amiakhum-CTG, Chandranath Timple"
          />
          <FooterTopWidget
            title="Relax Trip"
            links="Bankok-Thailand, Cox's Bazar"
          />
          <FooterTopWidget
            title="Family Trip"
            links="Cox's Bazar, Kolkata, Nilgiri - Nilachal"
          />
          <FooterTopWidget
            title="Tracking"
            links="Bandarban, Amiakhum-CTG, Chandranath Timple"
          />
          <FooterTopWidget
            title="Relax Trip"
            links="Bankok-Thailand, Cox's Bazar"
          />
        </div>
      </div>
    </div>
  );
}
