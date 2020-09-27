import React from "react";
import {StyledFooter, Link} from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Currency exchange courses based on&thinsp;
        <Link href="https://kursy-walut.mybank.pl/" target="_blanc">
          kursy-walut.mybank.pl
        </Link>
        &thinsp;from day 4.09.2020
      </p>
      <p>© Kamil Szewczyk 2020</p>
    </StyledFooter>
  );
};

export default Footer;
