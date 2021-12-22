import React, { useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import validator from "validator";
import image from "../assets/images/payment.png";
import classes from "../styles/Footer.module.css";
import Button from "./Button";
import Input from "./Input";
import SocialIcons from "./SocialIcons";
export default function FooterBottom() {
  const [checkedMail, setCheckedMail] = useState(true);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    if (email === null) {
      return false;
    }
    if (validator.isEmail(email)) {
      setCheckedMail(true);
      const fetchNewsletter = async (e) => {
        const res = fetch(
          "https://travel-app-98c90-default-rtdb.asia-southeast1.firebasedatabase.app/subscribers.json",
          {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify({
              email,
            }),
          }
        );
        if (res) {
          setSuccess(true);
          setInterval(() => {
            setSuccess(false);
          }, 2000);
        }
        setEmail("");
      };
      fetchNewsletter();
    } else {
      setCheckedMail(false);
    }
  };

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
            {success && (
              <div className="alert alert-success" role="alert">
                Thank you for subscribe us
              </div>
            )}
            <form className={classes.newletter__form} onSubmit={handleClick}>
              <div className="input-group">
                <Input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Enter Your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={`${classes.form__control} form-control`}
                />
                <Button button type="submit">
                  <IoPaperPlaneOutline />
                </Button>
              </div>
            </form>
            {!checkedMail && <div>This is Invalid Email</div>}
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
