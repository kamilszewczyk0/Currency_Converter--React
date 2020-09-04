import React, {useState} from "react";
import Result from "./Result";
import {currencies} from "../currencies";
import "./style.css";

const Form = ({result, calculateFinalAmount}) => {
  const [currency, setCurrency] = useState(currencies[0].shorthand);

  const [amount, setAmount] = useState("10");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateFinalAmount(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="converter">
        <legend className="converter__name">Currency converter v2</legend>
        <section className="section">
          <label className="converter__amount">
            <span className="converter__label">
              How much <strong>PLN</strong> do You want to exchange?
            </span>
            <input
              value={amount}
              onChange={({target}) => setAmount(target.value)}
              name="amount"
              className="converter__amountValue"
              type="number"
              min="1"
              step="0.01"
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
            <select
              value={currency}
              name="currencyList"
              className="converter__currencyList"
              onChange={({target}) => setCurrency(target.value)}>
              {currencies.map((currency) => (
                <option key={currency.shorthand} value={currency.shorthand}>
                  {`${currency.shorthand} (${currency.fullName})`}
                </option>
              ))}
            </select>
          </label>
        </section>
        <button className="converter__btn">Let's see...</button>
        <Result result={result} />
      </fieldset>
    </form>
  );
};

export default Form;
