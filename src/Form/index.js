import React from "react";
import "./style.css";

const Form = ({children}) => {
  return (
    <form className="form">
      <fieldset className="converter">{children}</fieldset>
    </form>
  );
};

export default Form;
