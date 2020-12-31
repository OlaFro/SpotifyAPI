import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { currStep } from "../redux/actions";

export default function Player() {
  const recommendations = useSelector((state) => state.recommendations);
  const dispatch = useDispatch();

  function sendBack() {
    dispatch(currStep("Form1"));
  }
  return (
    <div>
      <h2>Suggested songs:</h2>

      {recommendations.map((track, index) => (
        <div key={index} className="track-list">
          <div>
            {track.artists[0].name}, {track.name}
          </div>
          <div>
            <audio controls>
              <source src={track.preview_url} type="audio/ogg" />
            </audio>
          </div>
        </div>
      ))}
      <input type="button" value="again!" onClick={sendBack} />
    </div>
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
