import React from "react";
import "./index.scss";

function Panaroma(props) {
  return (
    <span className={`panaroma ${props.className}`}>{props.children}</span>
  );
}

export default Panaroma;
