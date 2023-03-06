import React from "react";
import "./index.scss";

import LogoWhite from "../../assets/Logo.svg";
import LogoBlue from "../../assets/Logo-blue.svg";

function Logo(props) {
  const logo =
    props.logo === "white" ? (
      <img src={LogoWhite} alt="Logo_img" />
    ) : (
      <img src={LogoBlue} alt="Logo_img" />
    );
  return <div className="logo__box">{logo}</div>;
}

export default Logo;
