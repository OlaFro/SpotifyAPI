import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import { StyledContainer } from "../styled components/styledFormContainer";

import React from "react";
import { useSelector } from "react-redux";

export default function FormContainer() {
  const currStep = useSelector((state) => state.currStep);
  return (
    <StyledContainer>
      {currStep === "Form1" ? <Form1 /> : null}
      {currStep === "Form2" ? <Form2 /> : null}
      {currStep === "Form3" ? <Form3 /> : null}
    </StyledContainer>
  );
}
