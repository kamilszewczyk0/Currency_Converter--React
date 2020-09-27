import styled from "styled-components";
import background from "./converter__background.jpg";

export const StyledForm = styled.form`
  padding-top: 40px;
`;

export const Fieldset = styled.fieldset`
  padding: 30px 30px 10px 30px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgb(0, 0, 0)),
    url("${background}");
  background-position: center;
  background-size: cover;
  z-index: 0;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Legend = styled.legend`
  font-family: "Anton", sans-serif;
  letter-spacing: 1px;
  padding: 10px;
  border: 2px ${({theme}) => theme.colors.golddust} solid;
  z-index: 1;
`;

export const Button = styled.button`
  background-color: #222222;
  color: ${({theme}) => theme.colors.golddust};
  border: 2px ${({theme}) => theme.colors.golddust} solid;
  padding: 8px 16px;
  margin-bottom: 20px;

  &:active {
    background: #333333;
  }

  &:focus {
    ${({theme}) => theme.colors.clicked};
    outline: none;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    margin: 0 auto 20px;
  }
`;

export const Title = styled.span`
  width: 300px;
  display: inline-block;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    margin-bottom: 15px;
    text-align: center;
  }
`;

export const Wrapper = styled.section`
  margin: 30px 0;
`;

export const Label = styled.label`
  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
