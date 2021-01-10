import React from "react";
import { StyledLoader } from "../styled components/styledLoader";
import { useSelector, useDispatch } from "react-redux";
import { getToken, getRecommendations, currStep } from "../redux/actions";
import { clientID, clientSecret } from "../helpers/credentials";
import axios from "axios";

export default function Loader() {
  const genre = useSelector((state) => state.genre);
  const dance = useSelector((state) => state.dance);
  const instrument = useSelector((state) => state.instrument);
  const mode = useSelector((state) => state.mode);
  const tempo = useSelector((state) => state.tempo);
  const popularity = useSelector((state) => state.popularity);
  const valance = useSelector((state) => state.valance);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("token request");
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
        dispatch(currStep("Player"));
      });
    });
  }, []);
  // [genre, dance, instrument, mode, tempo, popularity, valance, dispatch]);

  return (
    <div>
      <StyledLoader>Loading...</StyledLoader>
    </div>
  );
}
