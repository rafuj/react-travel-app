import React from "react";
import { BsPerson } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/LanguageArea.module.css";
export default function LanguageArea() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={`${classes.changeLanguage} me-3 me-lg-0`}>
      <div className="d-none d-sm-block">
        <span>
          <BsPerson />
        </span>
        {currentUser ? (
          <>
            <Link to="/">{currentUser.displayName}</Link>
            <span className="ms-2" onClick={logout}>
              <FiLogOut />
            </span>
          </>
        ) : (
          <>
            <Link className="text--title" to="/login">
              Login
            </Link>
            <Link className="text--title" to="/registration">
              Create Account
            </Link>
          </>
        )}
      </div>
      <select className={classes.language}>
        <option value="en">English</option>
        <option value="bn">Bangla</option>
        <option value="pk">Urdu</option>
        <option value="ind">Hindi</option>
      </select>
    </div>
  );
}
