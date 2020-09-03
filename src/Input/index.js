import React from "react";

const Input = () => {
  return (
    <input
      name="amount"
      className="converter__amountValue "
      type="number"
      min="1"
      step="1"
      placeholder="Enter the amount"
      required
    />
  );
};

export default Input;
