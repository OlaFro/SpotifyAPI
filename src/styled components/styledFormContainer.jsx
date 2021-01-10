import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    width: 80%;
  }
`;
