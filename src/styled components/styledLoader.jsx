import styled, { keyframes } from "styled-components";

const blink = keyframes`
from {
  opacity: 0
}
to {
  opacity: 1
}
`;

export const StyledLoader = styled.div`
  height: 100%;
  width: 100%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  animation: ${blink} 1000ms ease-in-out infinite;
`;
