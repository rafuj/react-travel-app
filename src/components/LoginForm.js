import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Contact.module.css";
import Button from "./Button";
import Input from "./Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError(false);
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <form className={`row`} onSubmit={handleSubmit}>
      <div className="col-sm-12">
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
      <div className="col-sm-12">
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
          fullWidth
          text="Login Now"
          type="submit"
          className="cmnBtn"
          disabled={loading}
        />
        <div className="info mt-2">
          Dpn't have an account? <Link to="/registration">Sign Up</Link>{" "}
          instead.
        </div>
      </div>
    </form>
  );
}
