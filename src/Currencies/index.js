import React from "react";

const Currencies = () => {
  return (
    <select name="currencyList" className="converter__currencyList">
      <option value="eur">EUR</option>
      <option value="usd">USD</option>
      <option value="nok">NOK</option>
      <option value="rub">RUB</option>
      <option value="gbp">GBP</option>
    </select>
  );
};

export default Currencies;
