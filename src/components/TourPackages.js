import React, { useState } from "react";
import { BsCalendarCheck, BsPeopleFill } from "react-icons/bs";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useDestination from "../hooks/useDestination";
import classes from "../styles/TourPackages.module.css";
import Button from "./Button";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

export default function TourPackages({ singlePage }) {
  const [page, setPage] = useState(0);
  const { loading, error, dest, hasMore } = useDestination(page);
  return (
    <Section className="pt-120 pb-120">
      {!singlePage && (
        <SectionHeader
          center
          title="We’ve Got Some Great Deals"
          txt="Quas expedita eos cumque cupiditate recusandae distinctio aspernatur architecto quasi quisquam possimus nisi laudantium facilis."
        />
      )}
      <div className="row g-4 justify-content-center tour__package__wrapper">
        {!loading && dest.length === 0 && (
          <div className="col-12 text-center">No Data Found</div>
        )}
        {loading && <div className="col-12 text-center">Loading ...</div>}
        {error && (
          <div className="col-12 text-center">There was an Error ...</div>
        )}
        {!loading && dest.length > 0 && !singlePage
          ? dest.slice(0, 6).map((item) => (
              <div className="col-lg-4 col-md-6" key={item.image}>
                <div className={classes.tour__pack}>
                  <div className={classes.tour__pack__thumb}>
                    <span className={`badge ${classes.badge} badge--primary`}>
                      {item.city}
                    </span>
                    <Link to="/packages">
                      <img src={item.image} alt="tour" />
                    </Link>
                  </div>
                  <div className={classes.tour__pack__content}>
                    <h5 className={classes.tour__pack__title}>
                      <Link to="/packages">{item.title}</Link>
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
                          <span className={classes.info}>
                            {item.size} People
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={classes.price__tag}>
                      <span className={`${classes.price} text--base`}>
                        {item.price}
                      </span>
                      <Button text="Book Now" link="/" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          : dest.map((item) => (
              <InfiniteScroll
                dataLength={dest.length}
                hasMore={hasMore}
                next={() =>
                  setTimeout(() => {
                    setPage(page + 9);
                  }, 200)
                }
                key={`${item.id}`}
              >
                <div className={classes.tour__pack}>
                  <div className={classes.tour__pack__thumb}>
                    <span className={`badge ${classes.badge} badge--primary`}>
                      {item.city}
                    </span>
                    <Link to="/packages">
                      <img src={item.image} alt="tour" />
                    </Link>
                  </div>
                  <div className={classes.tour__pack__content}>
                    <h5 className={classes.tour__pack__title}>
                      <Link to="/packages">{item.title}</Link>
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
                          <span className={classes.info}>
                            {item.size} People
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={classes.price__tag}>
                      <span className={`${classes.price} text--base`}>
                        {item.price}
                      </span>
                      <Button text="Book Now" link="/" />
                    </div>
                  </div>
                </div>
              </InfiniteScroll>
            ))}
      </div>
    </Section>
  );
}
