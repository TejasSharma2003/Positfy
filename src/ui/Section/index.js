import React from "react";
import "./index.scss";

function Section(props) {
  return (
    <section id="section" className={props.className}>
      {props.children}
    </section>
  );
}

export default Section;
