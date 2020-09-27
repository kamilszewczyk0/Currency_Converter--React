import React, {useState} from "react";
import Result from "./Result";
import {currencies} from "../currencies";
import {
  StyledForm,
  Fieldset,
  Legend,
  Button,
  Title,
  Label,
  Wrapper,
} from "./styled";
import Clock from "../Clock";

const Form = ({result, calculateFinalAmount}) => {
  const [currency, setCurrency] = useState(currencies[0].shorthand);

  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateFinalAmount(currency, amount);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Currency converter v2</Legend>
        <Clock />
        <Wrapper>
          <Label>
            <Title>
              How much <strong>PLN</strong> do You want to exchange?
            </Title>
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
          </Label>
        </Wrapper>
        <Wrapper className="section">
          <Label className="converter__currency">
            <Title>Choose the currency You want:</Title>
            <select
              value={currency}
              name="currencyList"
              onChange={({target}) => setCurrency(target.value)}>
              {currencies.map((currency) => (
                <option key={currency.shorthand} value={currency.shorthand}>
                  {`${currency.shorthand} (${currency.fullName})`}
                </option>
              ))}
            </select>
          </Label>
        </Wrapper>
        <Button>Let's see...</Button>
        <Result result={result} />
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
