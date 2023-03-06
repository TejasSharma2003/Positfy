import React from "react";
import "./index.scss";

import Section from "../../ui/Section";
import Container from "../../ui/Container";

import SectionHeading from "../../elements/SectionHeading";

import { plans } from "./plans";
import Plan from "./Plan";

function Pricing() {
  return (
    <Section className="pricing">
      <div className="pricing__heading util-text-center">
        <SectionHeading
          panaroma="Pricing and Plans"
          heading="Get More Value for Your Money"
        />
      </div>
      <Container>
        <div className="pricing__plan">
          {plans.map((plan, idx) => (
            <Plan
              key={idx}
              plan={plan.name}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Pricing;
