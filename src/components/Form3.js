import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setPopularity, setValance, currStep } from "../redux/actions";

import {
  StyledAsk,
  StyledCentering,
  StyledInputContainer,
  StyledButton,
  StyledDescription,
  StyledInput,
  StyledWarning,
} from "../styled components/styledForm";

export default function Form3() {
  const popularity = useSelector((state) => state.popularity);
  const valance = useSelector((state) => state.valance);

  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);

  function handleValance(e) {
    dispatch(setValance(e.target.value));
  }

  function handlePopularity(e) {
    dispatch(setPopularity(e.target.value));
  }

  function tokenRequest(e) {
    e.preventDefault();
    setClicked(true);
    dispatch(currStep("Loader"));
  }

  return (
    <div>
      <StyledAsk step3>
        <StyledCentering>
          <label htmlFor="popularity">How popular should it be?</label>
          <StyledInputContainer>
            <StyledDescription>not at all</StyledDescription>
            <StyledInput
              type="range"
              name="popularity"
              min="0"
              max="100"
              step="1"
              onChange={handlePopularity}
            />

            <StyledDescription>very!</StyledDescription>
          </StyledInputContainer>
          <StyledWarning opacity={clicked && !popularity ? 1 : 0} margin>
            Please choose popularity
          </StyledWarning>
        </StyledCentering>

        <StyledCentering>
          <label htmlFor="valance">Do you look for some positive vibe?</label>

          <StyledInputContainer>
            <StyledDescription>no joy</StyledDescription>
            <StyledInput
              type="range"
              name="valance"
              min="0.00"
              max="1.00"
              step="0.10"
              onChange={handleValance}
            />
            <StyledDescription>I feel happy!</StyledDescription>
          </StyledInputContainer>
          <StyledWarning opacity={clicked && !valance ? 1 : 0} margin>
            Please choose the mood
          </StyledWarning>
        </StyledCentering>
        <StyledButton next onClick={tokenRequest}>
          next
        </StyledButton>
      </StyledAsk>
    </div>
  );
}
