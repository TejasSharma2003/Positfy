import React from "react";
import Heading from "../../elements/Heading";
import Para from "../../elements/Para";

function Step({ content }) {
  return (
    <div className="procedure__box">
      <span className="procedure__icon">
        <content.icon />
      </span>
      <Heading className="heading__tertiary-sm">{content.heading}</Heading>
      <Para>{content.para}</Para>
    </div>
  );
}

export default Step;
