import React from "react";
import Currencies from "./Currencies";
import Input from "./Input";
import Section from "./Section";
import Legend from "./Legend";
import Button from "./Button";

function App() {
  return (
    <section className="container">
      <form className="form">
        <fieldset className="converter">
          <Legend />
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
          <Button />
          <p className="converter__result"></p>
        </fieldset>
      </form>
      <footer className="footer">
        <section>
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
