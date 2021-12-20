import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";
import classes from "../styles/SocialIcons.module.css";

export default function SocialIcons({ notCenter }) {
  return (
    <ul
      className={`${classes.socialIcons} ${
        notCenter ? "justify-content-start" : ""
      }`}
    >
      <li>
        <a href="#0">
          <BsFacebook />
        </a>
      </li>
      <li>
        <a href="#0">
          <BsTwitter />
        </a>
      </li>
      <li>
        <a href="#0">
          <BsInstagram />
        </a>
      </li>
      <li>
        <a href="#0">
          <BsPinterest />
        </a>
      </li>
    </ul>
  );
}
