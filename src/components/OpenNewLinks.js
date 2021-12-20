import React from "react";
import { Link } from "react-router-dom";
export default function OpenNewLinks({ link, children, ...rest }) {
  const handleClick = () => {
    window.open(link);
  };
  return (
    <Link to="/" onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
