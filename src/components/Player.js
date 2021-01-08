import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  currStep,
  setGenre,
  setDance,
  setInstrument,
  setMode,
  setTempo,
  setPopularity,
  setValance,
} from "../redux/actions";
import {
  StyledPlayer,
  StyledHeading,
  StyledGrid,
  StyledIframe,
  StyledText,
} from "../styled components/styledPlayer";
import { StyledButton } from "../styled components/styledForm";
import Loader from "./Loader";

export default function Player() {
  const recommendations = useSelector((state) => state.recommendations);
  const genre = useSelector((state) => state.genre);
  const dance = useSelector((state) => state.dance);
  const vocal = useSelector((state) => state.instrument);
  const mode = useSelector((state) => state.mode);
  const tempo = useSelector((state) => state.tempo);
  const popularity = useSelector((state) => state.popularity);
  const valance = useSelector((state) => state.valance);
  const dispatch = useDispatch();

  function sendBack() {
    dispatch(currStep("Start"));
    dispatch(setGenre(""));
    dispatch(setDance(""));
    dispatch(setInstrument(""));
    dispatch(setMode(""));
    dispatch(setTempo(""));
    dispatch(setPopularity(""));
    dispatch(setValance(""));
  }
  return (
    <StyledPlayer>
      <StyledHeading>Bunch of songs Spotify has for You:</StyledHeading>
      <StyledText>
        {" "}
        You chose: <br></br> genre: {genre}, danceability: {dance},
        vocal/instrumentalness: {vocal}, modality: {mode}, tempo: {tempo},
        popularity: {popularity}, mood: {valance}
      </StyledText>
      {recommendations ? (
        <StyledGrid>
          {/* <StyledText player>You chose: Genre: {genre}</StyledText> */}
          {recommendations.map((track, index) => (
            <StyledIframe
              src={`https://open.spotify.com/embed/track/${track.id}`}
              width="250"
              height="80"
              key={track.id}
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          ))}
        </StyledGrid>
      ) : (
        <Loader />
      )}
      <StyledButton again onClick={sendBack}>
        Again!
      </StyledButton>
    </StyledPlayer>
  );
}
