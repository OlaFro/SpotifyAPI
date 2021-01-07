import styled from "styled-components";

export const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 20% 1fr 10%;
  justify-items: center;
  align-content: center;

  height: 99vh;
`;

export const StyledHeading = styled.header`
  font-size: 120px;
  font-style: italic;
`;

export const StyledFooter = styled.footer`
  font-size: 0.8rem;
  color: white;
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid white;
`;
