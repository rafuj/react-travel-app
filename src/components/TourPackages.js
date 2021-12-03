import React from "react";
import { BsCalendarCheck, BsPeopleFill } from "react-icons/bs";
import useDestination from "../hooks/useDestination";
import classes from "../styles/TourPackages.module.css";
import Button from "./Button";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
export default function TourPackages() {
  const { loading, error, dest } = useDestination();
  return (
    <Section className="pt-120 pb-120">
      <SectionHeader
        center
        title="We’ve Got Some Great Deals"
        txt="Quas expedita eos cumque cupiditate recusandae distinctio aspernatur architecto quasi quisquam possimus nisi laudantium facilis."
      />
      <div className="row g-4 justify-content-center">
        {!loading && dest.length === 0 && (
          <div className="col-12 text-center">No Data Found</div>
        )}
        {loading && <div className="col-12 text-center">Loading ...</div>}
        {error && (
          <div className="col-12 text-center">There was an Error ...</div>
        )}
        {!loading &&
          dest.length > 0 &&
          dest.slice(0, 6).map((item) => (
            <div className="col-lg-4 col-md-6" key={item.image}>
              <div className={classes.tour__pack}>
                <div className={classes.tour__pack__thumb}>
                  <span className={`badge ${classes.badge} badge--primary`}>
                    {item.city}
                  </span>
                  <a href="#0">
                    <img src={item.image} alt="tour" />
                  </a>
                </div>
                <div className={classes.tour__pack__content}>
                  <h5 className={classes.tour__pack__title}>
                    <a href="#0">{item.title}</a>
                  </h5>
                  <p>{item.text}</p>
                  <div className={classes.dutation__grp}>
                    <div className={classes.item}>
                      <div className={classes.icon}>
                        <BsCalendarCheck />
                      </div>
                      <div className={classes.cont}>
                        <h6 className={classes.item__title}>Duration</h6>
                        <span className={classes.info}>
                          {item.duration} Days
                        </span>
                      </div>
                    </div>
                    <div className={classes.item}>
                      <div className={classes.icon}>
                        <BsPeopleFill />
                      </div>
                      <div className={classes.cont}>
                        <h6 className={classes.item__title}>Group Size</h6>
                        <span className={classes.info}>{item.size} People</span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.price__tag}>
                    <span className={`${classes.price}  text--base`}>
                      {item.price}
                    </span>
                    <Button text="Book Now" link="#0" />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
}
