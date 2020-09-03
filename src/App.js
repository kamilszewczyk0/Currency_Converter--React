import React from "react";

function App() {
  return (
    <section className="container">
      <form className="form">
        <fieldset className="converter">
          <legend className="converter__name">Currency converter</legend>
          <p>
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
          </p>
          <p>
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
          </p>
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
