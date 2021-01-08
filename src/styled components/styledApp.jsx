import styled from "styled-components";

export const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 20% 1fr 10%;
  justify-items: center;
  align-content: center;
  height: 100vh;
`;

let shadow = "";
for (let i = 0; i < 1000; i++) {
  shadow += (shadow ? "," : "") + i * 1 + "px " + i * 1 + "px 0 #E5BACB";
}

export const StyledHeading = styled.header`
  font-size: 120px;
  font-style: italic;
  text-shadow: 1px 1px 0 red;
  text-shadow: ${shadow};
`;

export const StyledFooter = styled.footer`
  font-size: 0.8rem;
  color: white;
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 2px solid white;
`;

export const StyledText = styled.h2`
  border: 4px solid white;
  width: 40%;
  padding: 2rem;
`;

export const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    background-color: ${(props) => props.theme.pink};
    color: white;
  }
`;
