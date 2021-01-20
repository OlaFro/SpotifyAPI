import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 99.8vw;
  /* height: 100vh; */
  background: ${(props) => props.theme.gradient};
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  color: white;
}`;
