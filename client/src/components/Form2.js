import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMode, setTempo, currStep } from "../redux/actions";
import {
  StyledAsk,
  StyledCentering,
  StyledButton,
  StyledWarning,
  StyledSpan,
  StyledInputContainer,
  StyledRadio,
  StyledTempoContainer,
} from "../styled components/styledForm";
import { useState } from "react";

export default function Form2() {
  const tempo = useSelector((state) => state.tempo);
  const [clicked, setClicked] = useState(false);
  const [modality, setModality] = useState(false);
  const dispatch = useDispatch();

  function handleMode(e) {
    let selected;
    e.target.value === "major" ? (selected = 1) : (selected = 0);
    dispatch(setMode(selected));
    setModality(true);
  }
  function handleTempo(e) {
    let chosenTempo;
    if (e.target.value === "slow") {
      chosenTempo = "min_tempo=60&max_tempo=90";
    } else if (e.target.value === "standard") {
      chosenTempo = "min_tempo=90&max_tempo=120";
    } else {
      chosenTempo = "min_tempo=120&max_tempo=200";
    }

    dispatch(setTempo(chosenTempo));
  }
  function sendForm2(e) {
    e.preventDefault();
    setClicked(true);
    if (modality && tempo) {
      dispatch(currStep("Form3"));
    }
  }

  return (
    <div>
      <StyledAsk step2>
        <StyledCentering>
          Choose the modality
          <StyledInputContainer step2>
            <StyledRadio
              type="radio"
              name="mode"
              value="major"
              onClick={handleMode}
            />
            <StyledSpan>major</StyledSpan>

            <StyledRadio
              type="radio"
              name="mode"
              value="minor"
              onClick={handleMode}
            />
            <StyledSpan>minor</StyledSpan>
          </StyledInputContainer>
          <StyledWarning opacity={clicked && !modality ? 1 : 0} margin>
            Please choose modality
          </StyledWarning>
        </StyledCentering>
        <StyledCentering>
          Pick the tempo in BPM
          <StyledTempoContainer>
            <StyledRadio
              type="radio"
              name="tempo"
              value="slow"
              onClick={handleTempo}
            />
            <StyledSpan> 60-90</StyledSpan>

            <StyledRadio
              type="radio"
              name="tempo"
              value="standard"
              onClick={handleTempo}
            />
            <StyledSpan> 90-120</StyledSpan>

            <StyledRadio
              type="radio"
              name="tempo"
              value="fast"
              onClick={handleTempo}
            />
            <StyledSpan> above 120</StyledSpan>
          </StyledTempoContainer>
          <StyledWarning opacity={clicked && !tempo ? 1 : 0} margin>
            Please set the tempo
          </StyledWarning>
        </StyledCentering>
        <StyledButton next onClick={sendForm2}>
          next
        </StyledButton>
      </StyledAsk>
    </div>
  );
}
