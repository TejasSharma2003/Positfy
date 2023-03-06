import React from "react";

import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Button from "../../elements/Button";

function Plan(props) {
  const isPopular = props.plan.trim() === "popular";

  return (
    <div className={`pricing__card ${isPopular && "pricing__card--fill"}`}>
      <h1 className="pricing__plan-name">{props.plan} plan</h1>
      <h4 className="pricing__price">${props.price}</h4>
      <span className="pricing__price-span">per/user</span>
      <ul className="pricing__avail">
        {props.features.map((feature, idx) => {
          return (
            <li key={idx} className="pricing__list">
              <IoCheckmarkCircleSharp className="pricing__icon pricing__icon--tick" />
              {feature}
            </li>
          );
        })}
      </ul>
      {isPopular ? (
        <Button className="btn__primary btn__primary--pricing">
          Choose plan
        </Button>
      ) : (
        <Button className="btn__ghost btn__ghost--pricing">
          Choose plan
        </Button>
      )}
    </div>
  );
}

export default Plan;
