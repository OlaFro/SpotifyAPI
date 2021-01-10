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
  StyledTip,
  StyledHover,
} from "../styled components/styledPlayer";
import { StyledButton } from "../styled components/styledForm";

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
  const [displayedMode, setDisplayedMode] = useState("");

  async function translateTempo(bpm) {
    await recommendations;
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

  async function translateMode(value) {
    await recommendations;
    if (value === "1") {
      setDisplayedMode("major");
    } else {
      setDisplayedMode("minor");
    }
  }

  translateMode(mode);

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
        <StyledH3>You've chosen:</StyledH3> genre:{" "}
        <StyledQuery>{genre}</StyledQuery>
        danceability{" "}
        <StyledTip>
          ?
          <StyledHover>
            Danceability describes how suitable a track is for dancing based on
            a combination of musical elements including tempo, rhythm stability,
            beat strength, and overall regularity. A value of 0.0 is least
            danceable and 1.0 is most danceable. (Spotify.com)
          </StyledHover>
        </StyledTip>
        <StyledQuery>{dance}</StyledQuery>
        instrumentalness{" "}
        <StyledTip>
          ?
          <StyledHover>
            Predicts whether a track contains no vocals. “Ooh” and “aah” sounds
            are treated as instrumental in this context. Rap or spoken word
            tracks are clearly “vocal”. The closer the instrumentalness value is
            to 1.0, the greater likelihood the track contains no vocal content.
            Values above 0.5 are intended to represent instrumental tracks, but
            confidence is higher as the value approaches 1.0. (Spotify.com)
          </StyledHover>
        </StyledTip>
        <StyledQuery>{vocal}</StyledQuery>
        modality{" "}
        <StyledTip>
          ?
          <StyledHover>
            Mode indicates the modality (major or minor) of a track, the type of
            scale from which its melodic content is derived. Major is
            represented by 1 and minor is 0. (Spotify.com)
          </StyledHover>
        </StyledTip>
        <StyledQuery>{displayedMode}</StyledQuery>
        tempo: <StyledQuery>{displayedTempo}</StyledQuery> popularity{" "}
        <StyledTip>
          ?
          <StyledHover>
            The popularity of the track. The value will be between 0 and 100,
            with 100 being the most popular. The popularity is calculated by
            algorithm and is based, in the most part, on the total number of
            plays the track has had and how recent those plays are.
            (Spotify.com)
          </StyledHover>
        </StyledTip>
        <StyledQuery>{popularity}</StyledQuery>mood{" "}
        <StyledTip>
          ?
          <StyledHover>
            A measure from 0.0 to 1.0 describing the musical positiveness
            conveyed by a track. Tracks with high valence sound more positive
            (e.g. happy, cheerful, euphoric), while tracks with low valence
            sound more negative (e.g. sad, depressed, angry). (Spotify.com)
          </StyledHover>
        </StyledTip>
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
      ) : null}
      <StyledButton again onClick={sendBack}>
        again!
      </StyledButton>
    </StyledPlayer>
  );
}
