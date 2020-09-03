import React from "react";
import Currencies from "./Currencies";
import Input from "./Input";
import Section from "./Section";
import Legend from "./Legend";
import Button from "./Button";
import Result from "./Result";
import Form from "./Form";
import Footer from "./Footer";
import Container from "./Container";

function App() {
  return (
    <Container>
      <Form>
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
        <Result />
      </Form>
      <Footer />
    </Container>
  );
}

export default App;
