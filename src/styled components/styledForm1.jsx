import styled from "styled-components";

export const StyledAsk1 = styled.div`
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 60%;
  font-family: "Montserrat", sans-serif;
  font-size: 1.3rem;
  color: white;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledBlob1 = styled.div`
  margin: auto;
  background: center no-repeat url(.);
  background-size: 100%;
  width: 40rem;
  height: 40rem;
  position: relative;
`;

export const StyledInputRange = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.input`
  background-color: transparent;
  border: 2px solid white;
  width: 5rem;
  height: 3rem;
  margin: 0, auto;
  color: white;
  font-size: 1.5rem;
  :hover {
    background-color: white;
    color: ${(props) => props.theme.aqua};
  }
`;

export const StyledSelect = styled.select`
  background-color: ${(props) => props.theme.aqua};
  color: white;
  outline: none;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  padding: 5px;
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  text-align: center;
  border: 2px solid white;
`;
