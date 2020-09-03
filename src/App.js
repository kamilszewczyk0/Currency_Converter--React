import React from "react";

function App() {
  return (
    <section class="container">
      <form class="form js-form">
        <fieldset class="converter">
          <legend class="converter__name">Currency converter</legend>
          <p>
            <label class="converter__amount">
              <span class="converter__label">
                How much <strong>PLN</strong> do You want to exchange?
              </span>
              <input
                name="amount"
                class="converter__amountValue js-value"
                type="number"
                min="1"
                step="1"
                placeholder="Enter the amount"
                required
              />
            </label>
          </p>
          <p>
            <label class="converter__currency">
              <span class="converter__label">
                Choose the currency You want:
              </span>
              <select
                name="currencyList"
                class="converter__currencyList js-currencyList">
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
                <option value="nok">NOK</option>
                <option value="rub">RUB</option>
                <option value="gbp">GBP</option>
              </select>
            </label>
          </p>
          <button class="converter__convertBtn">Let's see...</button>
          <p class="converter__result js-result"></p>
        </fieldset>
      </form>
      <footer class="footer">
        <p class="footer__statement">
          Currency exchange courses based on{" "}
          <a
            class="footer__link"
            href="https://kursy-walut.mybank.pl/"
            target="_blanc">
            kursy-walut.mybank.pl
          </a>{" "}
          from day 4.07.2020
        </p>
        <p class="footer__credits">© Kamil Szewczyk 2020</p>
      </footer>
    </section>
  );
}

export default App;
