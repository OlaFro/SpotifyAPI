import FormContainer from "./components/FormContainer";
import Player from "./components/Player";
import Start from "./components/Start";
import { useSelector } from "react-redux";
import {
  StyledApp,
  StyledHeading,
  StyledFooter,
} from "./styled components/styledApp";

import { GlobalStyle } from "./styled components/global";
import { ThemeProvider } from "styled-components";
import * as theme from "./styled components/theme";

function App() {
  const tracks = useSelector((state) => state.recommendations);
  const currStep = useSelector((state) => state.currStep);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledApp>
          <StyledHeading>Pick your songs</StyledHeading>
          {currStep === "Start" ? <Start /> : null}
          {currStep === "Form1" ||
          currStep === "Form2" ||
          currStep === "Form3" ? (
            <FormContainer />
          ) : null}
          {currStep === "tracks" && tracks ? <Player /> : null}
          <StyledFooter>
            Created by Ola Frost. Powered by Spotify API.
          </StyledFooter>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
