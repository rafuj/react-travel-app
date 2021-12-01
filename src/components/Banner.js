import React from "react";
import image from "../assets/images/banner/banner-bg.jpg";
import classes from "../styles/Banner.module.css";
import BannerForm from "./BannerForm";
import Button from "./Button";
export default function Banner() {
  return (
    <section
      className={classes.bannerSection}
      style={{ backgroundImage: "url(" + image + ")" }}
    >
      <div className={`${classes.container} container`}>
        <div className={classes.banner__wrapper}>
          <div className={classes.banner__wrapper__content}>
            <h2 className={`${classes.banner__title} text-white`}>
              Explore New Destination with Us
            </h2>
            <p className={classes.txt}>
              Hic similique impedit sint asperiores ab fugit deserunt ex sit
              fugiat sunt nihil minima, illo laboriosam nesciunt.
            </p>
            <div className={`${classes.btn__grp} btn__grp`}>
              <Button text="Explore Tours" />
              <Button outline text="About Us" />
            </div>
          </div>
          <div className={classes.banner__wrapper__area}>
            <div className="text-area">
              <h4 className={classes.banner__area__title}>
                Love where you're going
              </h4>
            </div>
            <BannerForm />
          </div>
        </div>
      </div>
    </section>
  );
}
