import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGenre, setDance, setInstrument, currStep } from "../redux/actions";
import { genres } from "../helpers/genres";
import {
  StyledAsk,
  StyledCentering,
  StyledInputContainer,
  StyledSelectContainer,
  StyledSelect,
  StyledOption,
  StyledArrow,
  StyledDescription,
  StyledInput,
  StyledWarning,
  StyledButton,
} from "../styled components/styledForm";
import { useState } from "react";

export default function Form1() {
  const genre = useSelector((state) => state.genre);
  const dance = useSelector((state) => state.dance);
  const instrument = useSelector((state) => state.instrument);
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  function handleGenre(e) {
    dispatch(setGenre(e.target.value));
  }
  function handleDance(e) {
    dispatch(setDance(e.target.value));
  }

  function handleInstrument(e) {
    dispatch(setInstrument(e.target.value));
  }

  function sendForm1(e) {
    e.preventDefault();
    setClicked(true);
    if (genre && dance && instrument) {
      dispatch(currStep("Form2"));
    }
  }

  return (
    <StyledAsk step1>
      <StyledCentering select>
        <label htmlFor="genre">What genre do You want to hear?</label>
        <StyledSelectContainer>
          <StyledSelect type="submit" value={`${genre}`} onChange={handleGenre}>
            <StyledOption>Genres:</StyledOption>
            <StyledOption>---------</StyledOption>
            {genres.map((elem) => (
              <StyledOption value={`${elem}`} key={`${elem}`}>
                {elem}
              </StyledOption>
            ))}
          </StyledSelect>
          <StyledArrow />
        </StyledSelectContainer>
        <StyledWarning opacity={clicked && genre === "" ? 1 : 0} margin>
          Please select genre
        </StyledWarning>
      </StyledCentering>
      <StyledCentering>
        <div>
          <label htmlFor="danceability">How danceble it should be?</label>
        </div>
        <StyledInputContainer step1>
          <StyledDescription>less</StyledDescription>
          <StyledInput
            type="range"
            name="danceability"
            min="0.00"
            max="1.00"
            step="0.10"
            onChange={handleDance}
          />

          <StyledDescription>more</StyledDescription>
        </StyledInputContainer>
        <StyledWarning opacity={clicked && !dance ? 1 : 0}>
          Please select danceability
        </StyledWarning>
      </StyledCentering>
      <StyledCentering>
        <label htmlFor="instrumentalness">
          More vocal or just instruments?
        </label>
        <StyledInputContainer>
          <StyledDescription>vocal</StyledDescription>
          <StyledInput
            type="range"
            name="instrumentalness"
            min="0.00"
            max="1.00"
            step="0.10"
            onChange={handleInstrument}
          />
          <StyledDescription>instrumentalness</StyledDescription>
        </StyledInputContainer>
        <StyledWarning opacity={clicked && !instrument ? 1 : 0}>
          Please select amount of vocal
        </StyledWarning>
      </StyledCentering>
      <StyledButton next onClick={sendForm1}>
        next
      </StyledButton>
    </StyledAsk>
  );
}
