import styled from "styled-components";

export const StyledAsk = styled.div`
  position: absolute;

  transform: translate(-50%, -50%);
  /* props.step2 ? "40%" : "58%"; props.step3 ? "30%" : null) */
  width: 70%;
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  color: white;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${(props) => {
    if (props.step1) {
      return `
      height: 58%;
      top: 57%;
      left: 48%;`;
    } else if (props.step2) {
      return `
      height: 40%;
      top: 53%;
      left: 45%;`;
    } else {
      return `height: 40%;
      top: 54%;
      left: 52%;`;
    }
  }}
`;

export const StyledBlob = styled.div`
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
  padding: 5px 15px;
  margin: 0, auto;
  color: white;
  font-size: 1.2rem;
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
  margin-top: 1rem;
`;

export const StyledDescription = styled.p`
  font-size: 1rem;
  padding: 0 10px;
`;
