import React from "react";
import "./index.scss";

//Logo img
// import Logo from "../../assets/Logo.svg";

//Elements
import Button from "../../elements/Button";
import Logo from "../../elements/Logo";

function Navbar() {
  return (
    <div className="navbar">
      <Logo logo="white"/>
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="#">Features</a>
        </li>
        <li className="navbar__link">
          <a href="#">Working</a>
        </li>
        <li className="navbar__link">
          <a href="#">Pricing</a>
        </li>
        <li className="navbar__link">
          <a href="#">Get access</a>
        </li>
      </ul>
      <div className="navbar__cta">
        <Button className="btn__ghost">Join us</Button>
      </div>
    </div>
  );
}

export default Navbar;
