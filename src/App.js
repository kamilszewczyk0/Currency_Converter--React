import React from "react";
import Currencies from "./Currencies";
import Input from "./Input";
import Section from "./Section";

function App() {
  return (
    <section className="container">
      <form className="form">
        <fieldset className="converter">
          <legend className="converter__name">Currency converter</legend>
          <Section
            title={[
              `How much `,
              <strong>PLN</strong>,
              ` do You want to exchange?`,
            ]}
            body={<Input />}
          />
          <Section
            title={"Choose the currency You want:"}
            body={<Currencies />}
          />
          <button className="converter__convertBtn">Let's see...</button>
          <p className="converter__result"></p>
        </fieldset>
      </form>
      <footer className="footer">
        <section className="footer__statement">
          Currency exchange courses based on
          <a
            className="footer__link"
            href="https://kursy-walut.mybank.pl/"
            target="_blanc">
            kursy-walut.mybank.pl
          </a>
          from day 4.07.2020
        </section>
        <p className="footer__credits">© Kamil Szewczyk 2020</p>
      </footer>
    </section>
  );
}

export default App;
