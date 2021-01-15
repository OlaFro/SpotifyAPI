import styled from "styled-components";

export const StyledApp = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
  align-content: center;
  grid-template-areas:
    "Header"
    "Main"
    "Footer";
  @media (min-width: 1340px) {
    min-height: 100vh;
  }
`;

let shadow = "";
for (let i = 0; i < 2000; i++) {
  shadow += (shadow ? "," : "") + i * 1 + "px " + i * 1 + "px 0 #E5BACB";
}

export const StyledHeading = styled.header`
  font-style: italic;
  text-shadow: ${shadow};
  font-size: 80px;
  grid-area: Header;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px 0;
  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    font-size: 120px;
  }
`;

export const StyledFooter = styled.footer`
  font-size: 0.8rem;
  color: white;
  margin: 1rem;
  border-top: 2px solid white;
  grid-area: Footer;
`;

export const StyledText = styled.h2`
  border: 4px solid white;
  width: 40%;
  max-height: 20rem;
  padding: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}px) {
    font-size: 1rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    font-size: 2vw;
  }
`;

export const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    background-color: ${(props) => props.theme.pink};
    color: white;
  }
`;
