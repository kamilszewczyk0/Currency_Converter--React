import React from "react";
import "./style.css";

const Result = ({result}) => {
  return (
    <>
      {result !== undefined && (
        <p className="converter__result">
          You will receive
          <strong>
            &nbsp;{result.targetAmount.toFixed(2)}&nbsp;{result.currency}
          </strong>
        </p>
      )}
    </>
  );
};

export default Result;
