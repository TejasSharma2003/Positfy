import React from "react";

import Container from "../../ui/Container";
import Section from "../../ui/Section";
import "./index.scss";

import wave from "../../assets/wave.svg";
import waveDown from "../../assets/wave-down.svg";

import { steps } from "./steps";
import Step from "./Step";
import SectionHeading from "../../elements/SectionHeading";

function Procedure() {
  return (
    <Section className="procedure">
      <div className="procedure__heading util-text-center">
        <SectionHeading
          panaroma="How it works"
          heading=" You don’t need to cram this over"
        />
      </div>
      <img
        className="procedure__wave procedure__wave--up"
        src={wave}
        alt="wave"
      />
      <div className="procedure__bg">
        <Container>
          <div className="procedure__row">
            {steps.map((step) => (
              <Step key={step.id} content={step} />
            ))}
          </div>
        </Container>
      </div>
      <img
        className="procedure__wave procedure__wave--down"
        src={waveDown}
        alt="wave"
      />
    </Section>
  );
}

export default Procedure;
