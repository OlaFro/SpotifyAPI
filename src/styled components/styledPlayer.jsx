import styled from "styled-components";

export const StyledHeading = styled.h2`
  font-size: 2rem;
  color: white;
  border: 4px solid white;
  width: 10rem;
  padding: 10px;
  display: block;
  margin: 0;
`;

export const StyledPlayer = styled.div`
  display: grid;
  width: 60%;
  margin: auto;
  margin-top: 2rem;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 1fr 42px;
  row-gap: 1rem;
  column-gap: 2rem;
  justify-items: start;
  border: 1px solid green;
  height: 100%;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  width: 100%;
  margin: 0 0 0 2rem;
  position: relative;
  ::after {
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
    ${(props) => (props.after ? `content: ""` : null)}
  }
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
