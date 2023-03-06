import React from "react";
import "./index.scss";

function Para(props) {
  return <p className={`para ${props.className}`}>{props.children}</p>;
}

export default Para;
