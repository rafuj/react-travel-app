import React from "react";
import classes from "../styles/Banner.module.css";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
export default function BannerForm() {
  return (
    <form className="banner__wrapper-form row g-3">
      <div className="col-6">
        <div className={classes.inputContainer}>
          <label className={classes.formLabel}>
            <span>Check In</span>
            <Input
              className={`${classes.formControl} form-control`}
              type="date"
              value="Arrival Date"
            />
          </label>
        </div>
      </div>
      <div className="col-6">
        <div className={classes.inputContainer}>
          <label className={classes.formLabel}>
            <span>Check Out</span>
            <Input
              className={`${classes.formControl} form-control`}
              type="date"
              value="Departure Date"
            />
          </label>
        </div>
      </div>
      <div className="col-sm-6">
        <div className={classes.inputContainer}>
          <label className={classes.formLabel}>
            <span>Destination</span>
            <Select
              name="destination"
              id="destination"
              className={`${classes.formControl} form-control`}
            >
              <option value="d1">New Jersey</option>
              <option value="d1">Delaware</option>
              <option value="d1">Philadelphia</option>
              <option value="d1">New York City</option>
              <option value="d1">San Francisco</option>
              <option value="d1">Wilmington</option>
              <option value="d1">Virginia</option>
              <option value="d1">Virginia Beach</option>
              <option value="d1">United States</option>
              <option value="d1">California</option>
              <option value="d1">Los Angeles</option>
              <option value="d1">Nevada</option>
            </Select>
          </label>
        </div>
      </div>
      <div className="col-sm-6">
        <div className={classes.inputContainer}>
          <label className={classes.formLabel}>
            <span>Total Guests</span>
            <Input
              className={`${classes.formControl} form-control`}
              type="number"
              placeholder="Guests"
            />
          </label>
        </div>
      </div>
      <div className="col-sm-12">
        <Button type="submit" button text="Submit Now" fullWidth />
      </div>
    </form>
  );
}
