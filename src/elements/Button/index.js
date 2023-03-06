import React from "react";
import "./index.scss";

function Button(props) {
  return (
    <a
      className={`btn ${props.className}`}
      href={props.href ? props.href : "#"}
    >
      {props.children}
    </a>
  );
} 

export default Button;
