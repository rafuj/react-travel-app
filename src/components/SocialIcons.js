import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import classes from "../styles/SocialIcons.module.css";
import OpenNewLinks from "./OpenNewLinks";
export default function SocialIcons({ notCenter }) {
  return (
    <ul
      className={`${classes.socialIcons} ${
        notCenter ? "justify-content-start" : ""
      }`}
    >
      <li>
        <OpenNewLinks link="https://www.facebook.com/">
          <BsFacebook />
        </OpenNewLinks>
      </li>
      <li>
        <OpenNewLinks link="https://www.twitter.com/">
          <BsTwitter />
        </OpenNewLinks>
      </li>
      <li>
        <OpenNewLinks link="https://www.instagram.com/">
          <BsInstagram />
        </OpenNewLinks>
      </li>
      <li>
        <OpenNewLinks link="https://www.pinterest.com/">
          <BsPinterest />
        </OpenNewLinks>
      </li>
    </ul>
  );
}
