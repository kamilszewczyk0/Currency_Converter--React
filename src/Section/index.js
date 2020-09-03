import React from "react";
import "./style.css";

const Section = ({title, body}) => {
  return (
    <section className="section">
      <span className="converter__label">{title}</span>
      {body}
    </section>
  );
};

export default Section;
