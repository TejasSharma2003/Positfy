import React from "react";
import "./index.scss";

//Ui Element
import Container from "../../ui/Container";

//Element
import Heading from "../../elements/Heading";
import Para from "../../elements/Para";

//Components
import Navbar from "../Navbar";
import Cta from "../Cta";

//image
import HeroImg from "../../assets/Hero-img.png";

function Header() {
  return (
    <>
      <Navbar />
      <div className="header">
        <Container>
          <div className="header__content">
            <div className="header__text-box">
              <Heading className="heading__primary">Let’s have a Chat</Heading>
              <Para className="para__hero">
                Our chat application provides a simple, convenient, and secure
                way to stay in touch with your loved ones no matter where they
                are.
              </Para>
              <Cta />
            </div>
            <div className="header__img-box">
              <img className="header__img" src={HeroImg} alt="hero-img" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
