import React from "react";
import image from "../assets/images/footer-bg.png";
import FooterContact from "./FooterContact";
import FooterTop from "./FooterTop";
export default function Footer() {
  return (
    <>
      <FooterContact />
      <footer
        style={{ background: `url(${image}) #031e44 repeat center center` }}
      >
        <FooterTop />
      </footer>
    </>
  );
}
