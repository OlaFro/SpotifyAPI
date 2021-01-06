import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import { StyledContainer } from "../styled components/styledWholeForm";

import React from "react";
import { useSelector } from "react-redux";

export default function WholeForm() {
  const currStep = useSelector((state) => state.currStep);
  return (
    <StyledContainer>
      <Form1 />
      <Form2 />
      <Form3 />
      {/* {currStep === "Form1" ? <Form1 /> : null}
      {currStep === "Form2" ? <Form2 /> : null}
      {currStep === "Form3" ? <Form3 /> : null} */}
    </StyledContainer>
  );
}
