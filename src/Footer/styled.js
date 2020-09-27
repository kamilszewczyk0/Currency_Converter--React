import styled from "styled-components";

export const StyledFooter = styled.footer`
  text-align: center;
  font-family: "Lato", sans-serif;
  margin-bottom: 40px;
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: ${({theme}) => theme.colors.clicked};
  }
`;
