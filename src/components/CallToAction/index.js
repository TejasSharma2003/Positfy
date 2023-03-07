import React from "react";
import Heading from "../../elements/Heading";
import Container from "../../ui/Container";
import Section from "../../ui/Section";
import Cta from "../Cta";
import "./index.scss";

import waveUpCta from "../../assets/wave-up-cta.svg";
import waveDown from "../../assets/Hero-wave.svg";

function CallToAction() {
  return (
    <>
      <img className="section-cta__bg" src={waveUpCta} alt="wave-cta" />
      <Section className="section-cta">
        <Container>
          <div className="section-cta__content">
            <Heading className="heading__secondary util-margin-bottom-md">
              So, What are you waiting for get an early access
            </Heading>
            <Cta />
          </div>
        </Container>
      </Section>
      <img className="section-cta__bg"  src={waveDown} alt="wave-down" />
    </>
  );
}

export default CallToAction;
