import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
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
  const genre = useSelector((state) => state.genre);
  const dance = useSelector((state) => state.dance);
  const instrument = useSelector((state) => state.instrument);
  const mode = useSelector((state) => state.mode);
  const tempo = useSelector((state) => state.tempo);
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
    if (popularity && valance) {
      dispatch(currStep("Player"));
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
          url: `${url2}?limit=12&market=DE&seed_genres=${genre}&target_instrumentalness=${instrument}&target_valance=${valance}&target_danceability=${dance}&target_mode=${mode}&${tempo}&target_popularity=${popularity}`,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }).then((res) => {
          dispatch(getRecommendations(res.data.tracks));
        });
      });
    }
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
