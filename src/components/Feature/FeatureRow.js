import React from "react";

import Heading from "../../elements/Heading";
import Panaroma from "../../elements/Panaroma";
import Para from "../../elements/Para";

function FeatureRow(props) {
  return (
    <div className="feature__row">
      <div className="feature__text-box">
        <Panaroma>{props.feature.panaroma}</Panaroma>
        <Heading className="heading__tertiary">{props.feature.heading}</Heading>
        <Para className="util-margin-top-sm para__feature">
          {props.feature.para}
        </Para>
      </div>
      <div
        className={`feature__img-box ${
          props.idx % 2 === 0 ? "feature__img-box--invert" : ""
        }`}
      >
        <img src={props.feature.imgSrc} alt="placeholder" />
      </div>
    </div>
  );
}

export default FeatureRow;
