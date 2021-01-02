import styled from "styled-components";

export const StyledAsk = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 70%;
  font-size: 1.2rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  ${(props) => {
    if (props.step1) {
      return `
      height: 57%;
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

export const StyledInputContainer = styled.div`
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
  font-size: 1rem;
  padding: 5px;
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  border: 2px solid white;
  margin-top: 1rem;

  :hover {
    background-color: ${(props) => props.theme.aqua};
  }
`;

export const StyledDescription = styled.p`
  font-size: 1rem;
  padding: 0 10px;
`;

export const StyledInput = styled.input`
  -webkit-appearance: none;
  background: transparent;
  border-color: transparent;
  width: 6rem;

  :focus {
    outline: none;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: white;
  }
  ::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background-color: white;
  }
  ::-ms-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background-color: white;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 3px;
    cursor: pointer;
    background-color: white;
    margin-top: -8px;
  }

  ::-moz-range-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 3px;
    cursor: pointer;
    border: none;
  }
`;

export const StyledWarning = styled.p`
  color: #f836ae;

  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-top: ${(props) => (props.margin ? "0.3rem" : "-0.2rem")};
  opacity: ${(props) => (props.display ? "1" : "0")};
`;

export const StyledRadio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  ::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border: 10px solid white;
    opacity: 1;
  }
`;
