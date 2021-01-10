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

export const StyledTip = styled.div`
  position: relative;
  display: inline-block;
  transform: translateY(-8px);
  cursor: pointer;
  font-size: 0.8rem;
  background-color: white;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  color: ${(props) => props.theme.aqua};
  text-align: center;
  z-index: 100;
  font-weight: 500;
  :hover > div {
    opacity: 1;
    text-align: left;
    font-weight: 500;
    z-index: 200;
  }
`;

export const StyledHover = styled.div`
  position: absolute;
  top: 0;
  left: 25px;
  width: 25rem;
  height: auto;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.9rem;
  padding: 20px;
  opacity: 0;
  transition: opacity 200ms;
  font-style: italic;
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
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  grid-template-rows: repeat(4, 100px);
  row-gap: 1rem;
  column-gap: 3rem;
  width: 100%;
  grid-area: StyledGrid;
  border: 4px solid white;
  justify-items: center;
  align-items: center;
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
  border: none;
`;
