import React, { useState } from "react";
import classes from "../styles/Contact.module.css";
import Button from "./Button";
import Input from "./Input";
export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      email !== "" &&
      company !== "" &&
      phone !== "" &&
      message !== ""
    ) {
      const res = fetch(
        "https://travel-app-98c90-default-rtdb.asia-southeast1.firebasedatabase.app/userDataContacts.json",
        {
          method: "POST",
          Headers: { "content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            company,
            phone,
            message,
          }),
        }
      );
      if (res) {
        setSuccess(true);
        setInterval(() => {
          setSuccess(false);
        }, 2000);
      }
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setCompany("");
    }
  };

  return (
    <form className={`row`} onSubmit={handleSubmit}>
      {success && (
        <div className="col-12 mb-4">
          <div class="alert alert-success">
            Your Message was Successfully Sent
          </div>
        </div>
      )}
      <div className="col-sm-6">
        <div className="form-group mb-3">
          <Input
            className={`${classes.formControl} form-control border`}
            type="name"
            label="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group mb-3">
          <Input
            className={`${classes.formControl} form-control border`}
            type="email"
            label="Your Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group mb-3">
          <Input
            className={`${classes.formControl} form-control border`}
            type="text"
            label="Your Company Name"
            value={company}
            required
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group mb-3">
          <Input
            className={`${classes.formControl} form-control border`}
            type="text"
            label="Your Phone Number"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="col-sm-12">
        <div className="form-group mb-3">
          <Input
            textarea
            className={`${classes.formControl} form-control border`}
            type="text"
            label="Your Message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="col-sm-12">
        <Button button text="Send Message" type="submit" className="cmnBtn" />
      </div>
    </form>
  );
}
