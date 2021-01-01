import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMode, setTempo, currStep } from "../redux/actions";
import {
  StyledAsk,
  StyledBlob,
  StyledButton,
} from "../styled components/styledForm1";

export default function Form2() {
  const mode = useSelector((state) => state.mode);
  const tempo = useSelector((state) => state.tempo);

  const dispatch = useDispatch();

  function handleMode(e) {
    let selected;
    e.target.value === "major" ? (selected = 1) : (selected = 0);
    dispatch(setMode(selected));
  }
  function handleTempo(e) {
    dispatch(setTempo(e.target.value));
  }
  function sendForm2(e) {
    e.preventDefault();
    if ((mode === 1 || mode === 0) && tempo) {
      console.log("test");
      dispatch(currStep("Form3"));
    }
  }

  return (
    <StyledBlob>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <path
          d="M399,291.5Q408,333,368.5,348.5Q329,364,300,395Q271,426,232,413Q193,400,128,408Q63,416,53.5,358.5Q44,301,67,256Q90,211,88.5,158Q87,105,142.5,108.5Q198,112,236,80.5Q274,49,330,51.5Q386,54,383,118Q380,182,385,216Q390,250,399,291.5Z"
          fill="#00cec9"
        ></path>
      </svg>

      <StyledAsk step2>
        <div>
          Choose the modality
          <div>
            <input
              type="radio"
              name="mode"
              value="major"
              onClick={handleMode}
            />
            <label htmlFor="major">major</label>
            <input
              type="radio"
              name="mode"
              value="minor"
              onClick={handleMode}
            />
            <label htmlFor="major">minor</label>
          </div>
        </div>
        <div>
          Pick the tempo
          <div>
            <input
              type="number"
              name="tempo"
              min="60"
              max="180"
              step="10"
              onChange={handleTempo}
            />{" "}
            BPM
          </div>
        </div>
        <StyledButton type="button" value="next" onClick={sendForm2} />
      </StyledAsk>
    </StyledBlob>
  );
}
