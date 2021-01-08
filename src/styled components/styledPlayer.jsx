import styled from "styled-components";

export const StyledHeading = styled.h2`
  box-sizing: border-box;
  font-size: 2rem;
  color: white;
  border: 4px solid white;
  width: 100%;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  margin: 0;
  grid-area: StyledHeading;
`;

export const StyledText = styled.div`
  border: 4px solid white;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  height: 100%;
  grid-area: StyledText;
  font-size: 1.2rem;
`;

export const StyledH3 = styled.h3`
  margin: 1rem auto;
`;

export const StyledQuery = styled.div`
  background: white;
  color: ${(props) => props.theme.pink};
  padding: 3px 10px;
  margin: 0.5rem 0;
`;

export const StyledPlayer = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  grid-template-columns: 20% 1.2fr 1.2fr 1fr;
  grid-template-rows: 5rem 1fr 1fr 1fr 7%;
  gap: 25px 25px;
  grid-template-areas:
    "StyledText StyledHeading StyledHeading StyledHeading"
    "StyledText StyledGrid StyledGrid StyledGrid"
    "StyledText StyledGrid StyledGrid StyledGrid"
    "StyledText StyledGrid StyledGrid StyledGrid"
    "StyledButton StyledButton StyledButton StyledButton";
  justify-items: start;

  height: 100%;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 1rem;
  width: 100%;
  position: relative;

  grid-area: StyledGrid;
`;

export const StyledAgainButton = styled.input`
  background-color: transparent;
  border: 4px solid white;
  color: white;
  width: 188px;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;

  :hover {
    background-color: white;
    color: ${(props) => props.theme.aqua};
  }

  :active {
    outline: none;
  }
`;

export const StyledIframe = styled.iframe`
  border: 4px solid white;
`;
