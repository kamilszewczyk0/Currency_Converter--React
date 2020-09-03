import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Currency exchange courses based on&thinsp;
        <a
          className="footer__link"
          href="https://kursy-walut.mybank.pl/"
          target="_blanc">
          kursy-walut.mybank.pl
        </a>
        &thinsp;from day 4.07.2020
      </p>
      <p>© Kamil Szewczyk 2020</p>
    </footer>
  );
};

export default Footer;
