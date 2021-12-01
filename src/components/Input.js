import React from "react";

export default function Input({ className, ...rest }) {
  return <input className={className} {...rest} />;
}
