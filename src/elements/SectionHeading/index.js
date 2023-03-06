import React from "react";

import Heading from "../Heading";
import Panaroma from "../Panaroma";

function SectionHeading(props) {
  return (
    <>
      <Panaroma className="panaroma__heading">{props.panaroma}</Panaroma>
      <Heading className="heading__secondary">{props.heading}</Heading>
    </>
  );
}

export default SectionHeading;
