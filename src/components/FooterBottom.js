import React from "react";
import { BsSearch } from "react-icons/bs";
import image from "../assets/images/payment.png";
import classes from "../styles/Footer.module.css";
import Button from "./Button";
import SocialIcons from "./SocialIcons";
export default function FooterBottom() {
  return (
    <div className="container">
      <div className={classes.footer__bottom}>
        <div className={classes.footer__wrapper}>
          <div className={classes.footer__bottom__widget}>
            <h6 className={classes.title}>Our Address</h6>
            <p>
              Viserlab LTD House 60, Road 03 Uttara Modern City Dhaka - 1206,
              Bangladesh
            </p>
          </div>
          <div className={classes.footer__bottom__widget}>
            <h6 className={classes.title}>Payment Options</h6>
            <div className="d-flex flex-wrap">
              <div className="pay-img">
                <img src={image} alt="payment" className="w-100" />
              </div>
            </div>
          </div>
          <div className={classes.footer__bottom__widget}>
            <h6 className={classes.title}>Subscribe Newsletter</h6>
            <p className="mb-4">Subscribe for new Offers and updates</p>
            <form className={classes.newletter__form}>
              <div className="input-group">
                <input
                  type="text"
                  className={`${classes.form__control} form-control`}
                  placeholder="Enter Your Email"
                  required=""
                />
                <Button button type="submit">
                  <BsSearch />
                </Button>
              </div>
            </form>
          </div>
          <div className={classes.footer__bottom__widget}>
            <h6 className={classes.title}>Connect with</h6>
            <p className="mb-3">
              To get updates follow us on Facebook, Twitters etc.
            </p>
            <SocialIcons notCenter />
          </div>
        </div>
      </div>
    </div>
  );
}
