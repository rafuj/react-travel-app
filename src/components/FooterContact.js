import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsChatRightDots } from "react-icons/bs";
import { RiTicket2Line } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import image from "../assets/images/support/support.png";
import classes from "../styles/Footer.module.css";
import FooterContactItem from "./FooterContactItem";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
export default function FooterContact() {
  return (
    <Section className={`${classes.footerCta} bg--primary overflow-hidden`}>
      <div className={classes.footerCta__wrapper}>
        <div className={classes.footerCta__content}>
          <SectionHeader
            whiteColor
            title="Contact Now For Enroll a Package"
            txt="No matter your hosting requirements, our platform will fit your needs. Odio praesentium
            corporis eaque"
          />
          <div className="text-light">
            <div className={classes.footerCta__area}>
              <FooterContactItem title="Sales Live Chat">
                <BsChatRightDots />
              </FooterContactItem>
              <FooterContactItem title="Support Tickets">
                <RiTicket2Line />
              </FooterContactItem>
              <FooterContactItem title="Call Us Now">
                <BiPhoneCall />
              </FooterContactItem>
              <FooterContactItem title="Send Email">
                <SiGmail />
              </FooterContactItem>
            </div>
          </div>
        </div>
        <div className={classes.footerCta__thumb}>
          <img src={image} alt="support" />
        </div>
      </div>
    </Section>
  );
}
