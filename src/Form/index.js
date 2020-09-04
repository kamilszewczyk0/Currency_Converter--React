import React from "react";
import "./style.css";

const Form = ({result}) => {
  return (
    <form className="form">
      <fieldset className="converter">
        <legend className="converter__name">Currency converter v2</legend>
        <section className="section">
          <label className="converter__amount">
            <span className="converter__label">
              How much <strong>PLN</strong> do You want to exchange?
            </span>
            <input
              name="amount"
              className="converter__amountValue"
              type="number"
              min="1"
              step="1"
              placeholder="Enter the amount"
              required
            />
          </label>
        </section>
        <section className="section">
          <label className="converter__currency">
            <span className="converter__label">
              Choose the currency You want:
            </span>
            <select name="currencyList" className="converter__currencyList">
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
              <option value="nok">NOK</option>
              <option value="rub">RUB</option>
              <option value="gbp">GBP</option>
            </select>
          </label>
        </section>
        <button className="converter__convertBtn">Let's see...</button>
        <p className="converter__result">You will receive {result}</p>
      </fieldset>
    </form>
  );
};

export default Form;
