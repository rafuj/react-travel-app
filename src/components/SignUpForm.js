import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Contact.module.css";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { signup } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password Don't Match");
    }
    try {
      setError(false);
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <form className={`row`} onSubmit={handleSubmit}>
      <div className="col-sm-6">
        <div className="form-group mb-3">
          <Input
            className={`${classes.formControl} form-control border`}
            type="text"
            label="Your Name"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
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
            type="password"
            label="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="form-group mb-3">
          <Input
            className={`${classes.formControl} form-control border`}
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="col-sm-12">
        <div className="form-group mb-3">
          <Checkbox
            type="checkbox"
            text="I agree to the Terms &amp; Conditions"
            value={agree}
            required
            onChange={(e) => setAgree(e.target.checked)}
          />
        </div>
      </div>
      {error && (
        <div className="col-12">
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      )}
      <div className="col-sm-12">
        <Button
          button
          text="Create Account"
          type="submit"
          className="cmnBtn"
          disabled={loading}
        />
        <div className="info mt-2">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </div>
    </form>
  );
}
