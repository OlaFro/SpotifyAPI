import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPopularity,
  setValance,
  getToken,
  getRecommendations,
  currStep,
} from "../redux/actions";
import { clientID, clientSecret } from "../helpers/credentials";
import axios from "axios";
import {
  StyledAsk,
  StyledBlob,
  StyledInputContainer,
  StyledButton,
  StyledDescription,
  StyledInput,
} from "../styled components/styledForm";

export default function Form3() {
  const popularity = useSelector((state) => state.popularity);
  const valance = useSelector((state) => state.dance);
  const genre = useSelector((state) => state.genre);
  const dance = useSelector((state) => state.dance);
  const instrument = useSelector((state) => state.instrument);
  const mode = useSelector((state) => state.mode);
  const tempo = useSelector((state) => state.tempo);
  const dispatch = useDispatch();

  function handleValance(e) {
    dispatch(setValance(e.target.value));
  }

  function handlePopularity(e) {
    dispatch(setPopularity(e.target.value));
  }

  function tokenRequest(e) {
    e.preventDefault();
    dispatch(currStep("tracks"));
    let url1 = "https://accounts.spotify.com/api/token";
    let url2 = "https://api.spotify.com/v1/recommendations";
    axios({
      url: url1,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
      },
      data: "grant_type=client_credentials",
    }).then((res) => {
      let token = res.data.access_token;
      dispatch(getToken(token));
      axios({
        url: `${url2}?limit=10&market=DE&seed_genres=${genre}&target_instrumentalness=${instrument}&target_valance=${valance}&target_danceability=${dance}&target_mode=${mode}&${tempo}&target_popularity=${popularity}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      }).then((res) => dispatch(getRecommendations(res.data.tracks)));
    });
  }

  return (
    <StyledBlob step3>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <path
          d="M428,288Q433,326,401.5,348Q370,370,340,382Q310,394,280,417.5Q250,441,221.5,415Q193,389,146.5,394.5Q100,400,106,353.5Q112,307,86,278.5Q60,250,48.5,206Q37,162,62.5,125Q88,88,144.5,110Q201,132,225.5,112Q250,92,284,89.5Q318,87,369.5,83Q421,79,433.5,124Q446,169,434.5,209.5Q423,250,428,288Z"
          fill="#00cec9"
        ></path>
      </svg>
      <StyledAsk>
        <div>
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
        </div>

        <div>
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
        </div>
        <StyledButton type="button" value="next" onClick={tokenRequest} />
      </StyledAsk>
    </StyledBlob>
  );
}
