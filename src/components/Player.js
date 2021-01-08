import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
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
  StyledQuery,
  StyledH3,
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

  const [displayedTempo, setDisplayedTempo] = useState("");

  async function translateTempo(bpm) {
    await recommendation;
    if (bpm === "min_tempo=60&max_tempo=90") {
      setDisplayedTempo("60-90 BPM");
    } else if (bpm === "min_tempo=90&max_tempo=120") {
      setDisplayedTempo("90-120 BPM");
    } else if (bpm === "min_tempo=120&max_tempo=200") {
      setDisplayedTempo("above 120 BPM");
    } else {
      console.log("no tempo");
    }
  }

  translateTempo(tempo);

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
        <StyledH3>You chose:</StyledH3> genre:{" "}
        <StyledQuery>{genre}</StyledQuery>
        danceability: <StyledQuery>{dance}</StyledQuery> vocal:{" "}
        <StyledQuery>{vocal}</StyledQuery> modality:{" "}
        <StyledQuery>{mode}</StyledQuery> tempo:{" "}
        <StyledQuery>{displayedTempo}</StyledQuery>
        <StyledQuery>{displayedTempo}</StyledQuery> popularity:{" "}
        <StyledQuery>{popularity}</StyledQuery>mood:
        <StyledQuery>{valance}</StyledQuery>
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
