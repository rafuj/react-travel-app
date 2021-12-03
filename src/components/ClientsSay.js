import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import images from "../assets/images/clients.png";
import useClientsSay from "../hooks/useClientsSay";
import classes from "../styles/Clients.module.css";
import Clients from "./Clients";
import Section from "./Section";
export default function ClientsSay() {
  const { loading, error, clientsSay } = useClientsSay();
  return (
    <Section className="pb-60 overflow-hidden">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className={classes.clients__thumb}>
            <img src={images} alt="clients" />
          </div>
        </div>
        <div className="col-lg-6">
          {!loading && clientsSay.length > 0 && (
            <Carousel
              infiniteLoop={false}
              showStatus={false}
              showArrows={false}
              autoPlay
              showThumbs={false}
            >
              {clientsSay.map((item, i) => (
                <Clients
                  key={i}
                  quote={item.quote}
                  name={item.name}
                  designation={item.designation}
                />
              ))}
            </Carousel>
          )}
          {loading && <div>Loading...</div>}
          {error && <div>Something Went Wrong...</div>}
          {!loading && clientsSay.length === 0 && <div>No Data Available</div>}
        </div>
      </div>
    </Section>
  );
}
