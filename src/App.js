import "./App.css";
import axios from "axios";
import { useState } from "react";

let request = "https://api.spotify.com/v1/search";
// let token = token deleted before committing

function App() {
  let [input, setInput] = useState("");
  let [artist, setArtist] = useState("");
  let [id, setId] = useState();
  let [tracks, setTracks] = useState([]);
  let [img, setImg] = useState();

  function handleChange(e) {
    setInput(encodeURI(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios({
      url: `${request}?q=${input}&type=artist`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: token,
      },
    }).then((res) => {
      console.log(res);
      setId(res.data.artists.items[0].id);
      setArtist(res.data.artists.items[0].name);
      setImg(res.data.artists.items[0].images[2].url);
      axios({
        url: `https://api.spotify.com/v1/artists/${res.data.artists.items[0].id}/top-tracks?market=US`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
      }).then((res) => setTracks(res.data.tracks));
    });
  }

  return (
    <div style={{ margin: "auto" }}>
      <input type="text" placeholder="Artist name" onChange={handleChange} />
      <input value="try" type="submit" onClick={handleSubmit} />
      {id ? (
        <div>
          <h1>Top 10 tracks from {artist} </h1>

          <img src={img} alt={artist} height="160" width="160" />
        </div>
      ) : null}
      {tracks
        ? tracks.map((elem, index) => (
            <p key={index}>
              {elem.name}{" "}
              <audio controls>
                <source src={elem.preview_url} type="audio/ogg" />
              </audio>
            </p>
          ))
        : null}
    </div>
  );
}

export default App;
