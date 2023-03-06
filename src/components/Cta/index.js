import React from "react";
import Button from "../../elements/Button";
import "./index.scss";

function Cta() {
  return (
    <div className="cta">
      <input className="cta__input" type="email" placeholder="Enter your email" />
      <Button className="btn__primary">Get notified</Button>
    </div>
  );
}

export default Cta;
