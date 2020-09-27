import React from "react";
import {StyledResult} from "./styled";

const Result = ({result}) => {
  return (
    <>
      {result !== undefined && (
        <StyledResult>
          You will receive
          <strong>
            &nbsp;{result.targetAmount.toFixed(2)}&nbsp;{result.currency}
          </strong>
        </StyledResult>
      )}
    </>
  );
};

export default StyledResult;
