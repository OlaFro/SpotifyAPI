import React from "react";
import { useDispatch } from "react-redux";
import { currStep } from "../redux/actions";
import { StyledButton } from "../styled components/styledForm";
import { StyledText } from "../styled components/styledApp";
import { StyledStart } from "../styled components/styledStart";
export default function Start() {
  const dispatch = useDispatch();
  function handleStart() {
    dispatch(currStep("Form1"));
  }
  return (
    <StyledStart>
      <StyledText>
        Hey! Do you want to listen new music based on your mood? Do you want to
        pick something especially danceable or only instrumental? This tool is
        for you. <div>Enjoy!</div>
      </StyledText>
      <StyledButton onClick={handleStart}>Start!</StyledButton>
    </StyledStart>
  );
}
