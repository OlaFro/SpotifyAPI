import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { currStep } from "../redux/actions";
import {
  StyledPlayer,
  StyledTracks,
  StyledHeading,
  StyledTracksDescription,
  StyledGrid,
  StyledAgainButton,
} from "../styled components/styledPlayer";

export default function Player() {
  const recommendations = useSelector((state) => state.recommendations);
  const dispatch = useDispatch();

  function sendBack() {
    dispatch(currStep("Form1"));
  }
  return (
    <StyledPlayer>
      <StyledHeading>Bunch of songs Spotify has for You:</StyledHeading>
      <StyledGrid>
        {recommendations.map((track, index) => (
          <StyledTracks key={index} className="track-list">
            <StyledTracksDescription>
              {track.artists[0].name}, {track.name}
            </StyledTracksDescription>
            <audio controls>
              <source src={track.preview_url} type="audio/ogg" />
            </audio>
          </StyledTracks>
        ))}
      </StyledGrid>
      <StyledAgainButton type="button" value="again!" onClick={sendBack} />
    </StyledPlayer>
  );
}

// Iframe player
// import Iframe from "react-iframe";
// <div>
//   <Iframe
//     src="https://open.spotify.com/embed/playlist/37i9dQZEVXcVqL4U5iL6lS"
//     width="300"
//     height="380"
//     frameborder="0"
//     allowtransparency="true"
//     allow="encrypted-media"
//   />
// </div>
