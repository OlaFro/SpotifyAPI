import styled from "styled-components";

export const StyledAsk = styled.div`
  font-size: 1.2rem;
  color: white;
  display: flex;
  flex-direction: column;
  border: 4px solid white;
  padding: 4rem 1rem;
  min-height: 60%;
  align-items: center;
  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    padding: 4rem;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  ${(props) => {
    if (props.step1) {
      return `
      justify-content: center; 
       `;
    } else if (props.step2) {
      return `
      justify-content: space-between;
       align-items: center;
       width: 80%;
       margin: auto;
       margin-top: 0.5rem
      `;
    }
  }}
`;

export const StyledCentering = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.div`
  box-sizing: content-box;
  background-color: white;
  color: ${(props) => props.theme.aqua};
  padding: 5px 15px;
  margin: 0;
  font-size: 1.2rem;
  height: 2rem;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 0;
  grid-area: StyledButton;
  justify-self: center;
  width: 3rem;
  ${(props) => {
    if (props.again) {
      return `order: 4;`;
    }
  }}

  ::after {
    content: "";
    background-color: ${(props) => props.theme.pink};
    position: absolute;
    left: -25%;
    width: 7rem;
    height: 7rem;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 200ms ease-in;
    z-index: 1;
    border-radius: 100%;
  }

  ::before {
    content: "";
    position: absolute;
    opacity: 0;

    ${(props) => {
      if (props.start) {
        return `content: "Start!"`;
      } else if (props.next) {
        return `content: "next"`;
      } else if (props.again) {
        return `content: "again!"`;
      }
    }}
  }

  :hover {
    ::after {
      transform: scaleX(1);
      transform-origin: none;
    }
    ::before {
      color: white;
      opacity: 1;
      z-index: 2;
    }

    :active {
      outline: none;
    }
  }
`;

export const StyledSelectContainer = styled.div`
  position: relative;
`;

export const StyledSelect = styled.select`
  -moz-appearance: none;
  background-color: transparent;
  border: 4px solid white;
  padding: 5px;
  margin: 5px;
  height: 2.5rem;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  appearance: none;

  :focus {
    outline: none;
  }
`;
export const StyledOption = styled.option`
  -moz-appearance: none;
  background-color: ${(props) => props.theme.aqua};
  color: white;
`;

export const StyledArrow = styled.span`
  /* display: none; */
  width: 40px;
  height: 35px;
  background-color: white;
  top: 8px;
  right: 8px;
  position: absolute;
  z-index: 1;
  pointer-events: none;

  ::after {
    content: "⌄";
    position: absolute;
    color: ${(props) => props.theme.pink};
    left: 13px;
    top: 0;
    transform: scale(1.5);
  }
  :hover::after {
    color: ${(props) => props.theme.aqua};
  }
`;

export const StyledDescription = styled.p`
  font-size: 1rem;
  padding: 0 10px;
  font-weight: 500;
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

export const StyledRadio = styled.input`
  width: 17px;
  height: 17px;
`;

export const StyledWarning = styled.p`
  color: ${(props) => props.theme.warning};
  font-size: 0.8rem;
  font-weight: 900;
  margin-top: ${(props) => (props.margin ? "0.4rem" : "-0.2rem")};
  opacity: ${(props) => props.opacity};
`;

export const StyledLabel = styled.label`
  align-items: center;
`;

export const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 1rem;
  margin-left: -10px;
  margin-top: 2px;
`;

export const StyledTempoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 19rem;
  margin-top: 0.5rem;
`;
