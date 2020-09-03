import React from "react";
import Currencies from "./Currencies";

function App() {
  return (
    <section className="container">
      <form className="form">
        <fieldset className="converter">
          <legend className="converter__name">Currency converter</legend>
          <section>
            <label className="converter__amount">
              <span className="converter__label">
                How much <strong>PLN</strong> do You want to exchange?
              </span>
              <input
                name="amount"
                className="converter__amountValue "
                type="number"
                min="1"
                step="1"
                placeholder="Enter the amount"
                required
              />
            </label>
          </section>
          <section>
            <label className="converter__currency">
              <span className="converter__label">
                Choose the currency You want:
              </span>
              <Currencies />
            </label>
          </section>
          <button className="converter__convertBtn">Let's see...</button>
          <p className="converter__result"></p>
        </fieldset>
      </form>
      <footer className="footer">
        <p className="footer__statement">
          Currency exchange courses based on
          <a
            className="footer__link"
            href="https://kursy-walut.mybank.pl/"
            target="_blanc">
            kursy-walut.mybank.pl
          </a>
          from day 4.07.2020
        </p>
        <p className="footer__credits">© Kamil Szewczyk 2020</p>
      </footer>
    </section>
  );
}

export default App;
