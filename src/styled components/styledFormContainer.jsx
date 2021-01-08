import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  margin-top: -5rem;

  @media (max-width: 1650px) {
    flex-direction: column;
  }
`;
