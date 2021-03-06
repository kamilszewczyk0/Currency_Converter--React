import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
   html {
   box-sizing: border-box;
   background: #222222;
   color: #fec300;
   font-family: "Lato", sans-serif;
   }

   *,
   ::before,
   ::after {
   box-sizing: inherit;
   }

   #root {
   display: flex;
   align-items: center;
   justify-content: center;
   background: #000000;
   }
`;
