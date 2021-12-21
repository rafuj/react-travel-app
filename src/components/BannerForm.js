import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useDestination from "../hooks/useDestination";
import classes from "../styles/Banner.module.css";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
export default function BannerForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guest, setGuest] = useState("");
  const [selectDest, setSelectDest] = useState("default");
  const [success, setSuccess] = useState(false);
  const [selectState, setSelectState] = useState(false);

  const { loading, error, dest } = useDestination();

  const handleClick = () => {
    selectDest === "default" ? setSelectState(true) : setSelectState(false);
    setInterval(() => {
      setSelectState(false);
    }, 5000);
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (selectDest !== "default" && startDate && endDate && guest) {
      const res = fetch(
        "https://travel-app-98c90-default-rtdb.asia-southeast1.firebasedatabase.app/touristRequest.json",
        {
          method: "POST",
          Headers: { "content-Type": "application/json" },
          body: JSON.stringify({
            destination: selectDest,
            startDate: startDate,
            endDate: endDate,
            guest: guest,
          }),
        }
      );
      if (res) {
        setSuccess(true);
        setSelectState(false);
        setInterval(() => {
          setSuccess(false);
        }, 5000);
      } else {
        alert("Please Fill the Data");
      }
    }
  };

  return (
    <form className="banner__wrapper-form row g-3" onSubmit={handleChange}>
      {success && (
        <div className="col-12">
          <div class="alert alert-success">
            Your Request is Successfully Accepted
          </div>
        </div>
      )}
      {selectState && (
        <div className="col-12">
          <div class="alert alert-danger">Please Select The Destination</div>
        </div>
      )}
      <div className="col-6">
        <div className={classes.inputContainer}>
          <label className={classes.formLabel}>
            <span>Check In</span>
            <DatePicker
              className={`${classes.formControl} form-control`}
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={(e) => setStartDate(e)}
              required
            />
          </label>
        </div>
      </div>
      <div className="col-6">
        <div className={classes.inputContainer}>
          <label className={classes.formLabel}>
            <span>Check Out</span>
            <DatePicker
              className={`${classes.formControl} form-control`}
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onChange={(e) => setEndDate(e)}
              required
            />
          </label>
        </div>
      </div>
      <div className="col-sm-6">
        <div className={classes.inputContainer}>
          <label className={classes.formLabel}>
            <span>Destination</span>
            <Select
              value={selectDest}
              className={`${classes.formControl} form-control`}
              onChange={(e) => setSelectDest(e.target.value)}
              required
            >
              <option value="default">Select Destination</option>
              {error && <option value="error">Something Went Wrong</option>}
              {!loading && dest.length === 0 && (
                <option value="noFound">No Destination Available</option>
              )}
              {!loading &&
                dest.map((option) => (
                  <option value={option.city} key={option.city}>
                    {option.city}
                  </option>
                ))}
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
              value={guest}
              min="0"
              onChange={(e) => setGuest(e.target.value)}
              required
            />
          </label>
        </div>
      </div>
      <div className="col-sm-12">
        <Button
          type="submit"
          button
          text="Submit Now"
          onClick={handleClick}
          fullWidth
        />
      </div>
    </form>
  );
}
