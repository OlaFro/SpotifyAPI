import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setPopularity,
  setValance,
  getToken,
  getRecommendations,
} from "../redux/actions";
import { clientID, clientSecret } from "../helpers/credentials";
import axios from "axios";

export default function Form3() {
  const popularity = useSelector((state) => state.popularity);
  const valance = useSelector((state) => state.dance);
  const token = useSelector((state) => state.token);
  const recommendations = useSelector((state) => state.recommendations);
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
        url: `${url2}?limit=10&market=US&seed_genres=${genre}&target_instrumentalness=${instrument}&target_valance=${valance}&target_danceability=${dance}&target_mode=${mode}&target_tempo=${tempo}&target_popularity=${popularity}`,
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
    <div style={{ border: "1px solid black" }}>
      <div>
        <label htmlFor="popularity">Popularity - {popularity}</label>
        <input
          type="range"
          name="popularity"
          min="0"
          max="100"
          step="1"
          onChange={handlePopularity}
        />
      </div>

      <div>
        <label htmlFor="valance">valance - {valance}</label>
        <input
          type="range"
          name="valance"
          min="0.00"
          max="1.00"
          step="0.10"
          onChange={handleValance}
        />
      </div>
      <input type="button" value="next" onClick={tokenRequest} />
    </div>
  );
}
