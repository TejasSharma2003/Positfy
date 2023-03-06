import React from "react";
import "./index.scss";

function Heading(props) {
  return <h1 className={`heading ${props.className}`}>{props.children}</h1>;
}

export default Heading;
