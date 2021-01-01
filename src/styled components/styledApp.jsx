import styled from "styled-components";

export const StyledApp = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const StyledBody = styled.body`
  margin: 0;
  padding: 0;
  width: 99vw;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    105deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(249, 184, 199, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  font-family: Arial, Helvetica, sans-serif;
`;

export const StyledHeading = styled.h1`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 120px;
  font-weight: 900;
  font-style: italic;
  height: 8.2rem;
  width: 60%;
  margin: auto;
  border-bottom: 25px solid white;
  overflow: hidden;
`;
