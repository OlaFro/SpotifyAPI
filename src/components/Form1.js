import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGenre, setDance, setInstrument, currStep } from "../redux/actions";
import { genres } from "../helpers/genres";
import {
  StyledAsk,
  StyledCentering,
  StyledInputContainer,
  StyledButton,
  StyledSelect,
  StyledDescription,
  StyledInput,
  StyledWarning,
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
    <div>
      {/* <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <path
          d="M464,287.5Q469,325,438,348.5Q407,372,376.5,384.5Q346,397,327,437Q308,477,268.5,487.5Q229,498,194.5,476.5Q160,455,143,419.5Q126,384,78.5,376Q31,368,36,326.5Q41,285,37.5,249.5Q34,214,43.5,179Q53,144,91.5,131.5Q130,119,153,100.5Q176,82,204,59Q232,36,270,28.5Q308,21,341,40.5Q374,60,395,90.5Q416,121,437.5,149.5Q459,178,459,214Q459,250,464,287.5Z"
          stroke="white"
          fill="transparent"
          strokeWidth="4px"
        ></path>
      </svg> */}
      <StyledAsk step1>
        <StyledCentering>
          <label htmlFor="genre">What genre do You want to hear?</label>

          <StyledSelect type="submit" value={`${genre}`} onChange={handleGenre}>
            <option>Genres:</option>
            <option>---------</option>
            {genres.map((elem) => (
              <option value={`${elem}`} key={`${elem}`}>
                {elem}
              </option>
            ))}
          </StyledSelect>
          <StyledWarning display={clicked && !genre ? true : false} margin>
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
          <StyledWarning display={clicked && !dance ? true : false}>
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
          <StyledWarning display={clicked && !instrument ? true : false}>
            Please select amount of vocal
          </StyledWarning>
        </StyledCentering>
        <StyledButton type="submit" value="next" onClick={sendForm1} />
      </StyledAsk>
    </div>
  );
}
