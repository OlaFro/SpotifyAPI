import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: stretch;
  @media (max-width: 1650px) {
    flex-direction: column;
  }
`;
