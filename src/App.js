import FormContainer from "./components/FormContainer";
import Player from "./components/Player";
import Start from "./components/Start";

import { useSelector } from "react-redux";
import {
  StyledApp,
  StyledHeading,
  StyledFooter,
  StyledLink,
} from "./styled components/styledApp";

import { GlobalStyle } from "./styled components/global";
import { ThemeProvider } from "styled-components";
import * as theme from "./styled components/theme";

function App() {
  const currStep = useSelector((state) => state.currStep);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledApp>
          <StyledHeading>Choosify</StyledHeading>
          {currStep === "Start" ? <Start /> : null}
          {currStep === "Form1" ||
          currStep === "Form2" ||
          currStep === "Form3" ? (
            <FormContainer />
          ) : null}
          {currStep === "Player" ? <Player /> : null}
          <StyledFooter>
            Created by{" "}
            <StyledLink href="https://github.com/OlaFro">Ola Frost</StyledLink>.
            Powered by Spotify API.
          </StyledFooter>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
