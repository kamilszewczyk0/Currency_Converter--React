import React, {useState} from "react";
import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";
import {currencies} from "./currencies";

function App() {
  const [result, setResult] = useState();

  const calculateFinalAmount = (currency, amount) => {
    const rate = currencies.find(({shorthand}) => shorthand === currency).value;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <Container>
      <Form result={result} calculateFinalAmount={calculateFinalAmount} />
      <Footer />
    </Container>
  );
}

export default App;
