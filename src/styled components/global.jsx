import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
    margin: 0;
  padding: 0;
  width: 99vw;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    105deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(249, 184, 199, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  font-family: 'Montserrat', sans-serif;
}`;
