import React from "react";
import "./index.scss";

import FeatureRow from "./FeatureRow";

import Section from "../../ui/Section";
import Container from "../../ui/Container";

import SectionHeading from '../../elements/SectionHeading';

import { features } from "./features";

function Feature() {
  return (
    <Section className="feature">
      <div className="feature__heading util-text-center">
        <SectionHeading
          panaroma="What it provides"
          heading="Grab the oppurtunity to connect with people"
        />
      </div>
      <Container>
        {features.map((feature, idx) => {
          return (
            <FeatureRow key={feature.id} feature={feature} idx={idx + 1} />
          );
        })}
      </Container>
    </Section>
  );
}

export default Feature;
