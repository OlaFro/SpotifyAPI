import styled from "styled-components";

export const StyledQuery = styled.div`
  display: grid;
  grid-template-columns: auto 20px;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "choice more"
    "output output"
    "desc desc";
  align-items: center;
  justify-items: space-around;
`;

export const StyledChoice = styled.div`
  grid-area: choice;
  padding: 0.3rem 0;
`;

export const StyledMore = styled.div`
  grid-area: more;
  cursor: pointer;
  position: relative;
  margin-right: 0.5rem;
  opacity: ${(props) => props.opacity};
  ::after {
    content: "⌄";
    position: absolute;
    color: white;
    left: 0;
    top: -17px;
    transform: scale(1.5);
  }
  :hover::after {
    color: ${(props) => props.theme.darkpink};
  }
`;

export const StyledClose = styled.div`
  grid-area: more;
  cursor: pointer;
  position: relative;
  margin-right: 0.5rem;
  opacity: ${(props) => props.opacity};
  ::after {
    content: "⌄";
    position: absolute;
    color: white;
    left: 0;
    top: -4px;
    transform: rotate(180deg) scale(1.5);
  }
  :hover::after {
    color: ${(props) => props.theme.darkpink};
  }
`;

export const StyledOutput = styled.span`
  background-color: white;
  color: ${(props) => props.theme.darkpink};
  grid-area: output;
  padding: 0.3rem;
  font-size: 1rem;
`;

export const StyledDesc = styled.div`
  padding: 0.5rem;
  background-color: white;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.75rem;
  grid-area: desc;
`;
