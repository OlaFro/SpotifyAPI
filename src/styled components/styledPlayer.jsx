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
  width: 50%;
  margin: auto;
  margin-top: 2rem;
  grid-template-columns: 10rem 1fr;
  grid-template-rows: 1fr 42px;
  row-gap: 1rem;
  column-gap: 2rem;
  justify-items: start;
`;

export const StyledTracks = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  row-gap: 4rem;
`;

export const StyledTracksDescription = styled.span`
  text-align: left;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  grid-row-gap: 1rem;
  padding: 0rem 1rem;
  align-self: center;
`;

export const StyledGrid = styled.div`
  display: grid;
  row-gap: 1rem;
  width: 100%;
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
    outline: none;`;
