import React from "react";
import {Main} from "./styled";

const Container = ({children}) => {
  return <Main className="container">{children}</Main>;
};

export default Container;
