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
  StyledAgainButton,
  StyledIframe,
} from "../styled components/styledPlayer";
import Loader from "./Loader";

export default function Player() {
  const recommendations = useSelector((state) => state.recommendations);
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
      {recommendations ? (
        <StyledGrid>
          {recommendations.map((track, index) => (
            <StyledIframe
              src={`https://open.spotify.com/embed/track/${track.id}`}
              width="250"
              height="80"
              key="index"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          ))}
        </StyledGrid>
      ) : (
        <Loader />
      )}
      <StyledAgainButton type="button" value="again!" onClick={sendBack} />
    </StyledPlayer>
  );
}
