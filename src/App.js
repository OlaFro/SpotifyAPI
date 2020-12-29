import "./App.css";
import axios from "axios";
import { useState } from "react";
import { clientID } from "./credentials";
import { clientSecret } from "./credentials";

function App() {
  let [token, setToken] = useState();
  let [input, setInput] = useState("");
  let [artist, setArtist] = useState("");
  let [genres, setGenres] = useState("");
  let [selectedGenre, setSelectedGenre] = useState();
  let [dance, setDance] = useState();
  let [instrument, setInstrument] = useState();
  let [mode, setMode] = useState();
  let [tempo, setTempo] = useState();
  let [valance, setValance] = useState();
  let [id, setId] = useState();
  // let [topTracks, setTopTracks] = useState([]);
  // let [img, setImg] = useState();
  let [personalized, setPersonalized] = useState([]);

  function handleArtist(e) {
    setInput(encodeURI(e.target.value));
  }

  function handleGenre(e) {
    setSelectedGenre(e.target.value);
  }
  function handleDance(e) {
    setDance(e.target.value);
  }

  function handleInstrument(e) {
    setInstrument(e.target.value);
  }

  function handleMode(e) {
    e.target.value === "major" ? setMode(1) : setMode(0);
  }

  function handleTempo(e) {
    setTempo(e.target.value);
  }
  function handleValance(e) {
    setValance(e.target.value);
  }

  function getToken(e) {
    e.preventDefault();
    axios({
      url: "https://accounts.spotify.com/api/token",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
      },
      data: "grant_type=client_credentials",
    }).then((res) => {
      let token = res.data.access_token;
      setToken(token);
      axios({
        url: "https://api.spotify.com/v1/recommendations/available-genre-seeds",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      }).then((res) => setGenres(res.data.genres));
    });
  }

  function handleSubmit(e) {
    let request2 = "https://api.spotify.com/v1/search";
    e.preventDefault();

    axios({
      url: `${request2}?q=${input}&type=artist`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => {
      console.log(res);
      setId(res.data.artists.items[0].id);
      setArtist(res.data.artists.items[0].name);
      // setImg(res.data.artists.items[0].images[2].url);
      // axios({
      //   url: `https://api.spotify.com/v1/artists/${res.data.artists.items[0].id}/top-tracks?market=US`,
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //     Authorization: token,
      //   },
      // }).then((res) => setTopTracks(res.data.tracks));
    });
  }

  function handleForm(e) {
    let request3 = "https://api.spotify.com/v1/recommendations";
    e.preventDefault();
    axios({
      url: `${request3}?limit=10&market=US&seed_genres=${selectedGenre}&target_instrumentalness=${instrument}&target_valance=${valance}&target_danceability=${dance}&target_mode=${mode}&target_tempo=${tempo}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    }).then((res) => setPersonalized(res.data.tracks));
  }

  return (
    <div className="App">
      <form className="formInputs">
        <div>First generate a token: </div>

        <input value="get it" type="submit" onClick={getToken} />
        {/* <div>
          <input
            type="text"
            onChange={handleArtist}
            name="artist"
            placeholder="Artist name"
          />
        </div>

        <input type="button" value="send" onClick={handleSubmit} /> */}

        <div>Choose your favorite genre</div>
        <div>
          <select type="submit" value="choose" onChange={handleGenre}>
            <option value="">choose your genre</option>
            {genres
              ? genres.map((elem, index) => (
                  <option value={`${elem}`} key="index">
                    {elem}
                  </option>
                ))
              : null}
          </select>
        </div>

        <div>
          Danceability describes how suitable a track is for dancing based on a
          combination of musical elements including tempo, rhythm stability,
          beat strength, and overall regularity. A value of 0.0 is least
          danceable and 1.0 is most danceable.
        </div>
        <div>
          <label htmlFor="danceability">Danceability - {dance}</label>
          <input
            type="range"
            name="danceability"
            min="0.00"
            max="1.00"
            step="0.10"
            onChange={handleDance}
          />
        </div>

        <div>
          Predicts whether a track contains no vocals. “Ooh” and “aah” sounds
          are treated as instrumental in this context. Rap or spoken word tracks
          are clearly “vocal”. The closer the instrumentalness value is to 1.0,
          the greater likelihood the track contains no vocal content. Values
          above 0.5 are intended to represent instrumental tracks, but
          confidence is higher as the value approaches 1.0.
        </div>
        <div>
          <label htmlFor="instrumentalness">
            Instrumentalness - {instrument}
          </label>
          <input
            type="range"
            name="instrumentalness"
            min="0.00"
            max="1.00"
            step="0.10"
            onChange={handleInstrument}
          />
        </div>

        <div>
          Mode indicates the modality (major or minor) of a track, the type of
          scale from which its melodic content is derived. Major is represented
          by 1 and minor is 0.
        </div>
        <div>
          <input type="radio" name="mode" value="major" onClick={handleMode} />
          <label htmlFor="major">major</label>
          <input type="radio" name="mode" value="minor" onClick={handleMode} />
          <label htmlFor="major">minor</label>
        </div>

        <div>
          The overall estimated tempo of a track in beats per minute (BPM). In
          musical terminology, tempo is the speed or pace of a given piece and
          derives directly from the average beat duration.
        </div>
        <div>
          <label htmlFor="tempo">tempo</label>
          <input
            type="number"
            name="tempo"
            min="50"
            max="250"
            step="10"
            onChange={handleTempo}
          />
        </div>
        <div>
          A measure from 0.0 to 1.0 describing the musical positiveness conveyed
          by a track. Tracks with high valence sound more positive (e.g. happy,
          cheerful, euphoric), while tracks with low valence sound more negative
          (e.g. sad, depressed, angry).
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
        <div>Submit the data from the form</div>
        <input value="submit" type="submit" onClick={handleForm} />
      </form>
      <div className="tracks">
        <h2>Suggested songs:</h2>
        <div className="queries">
          Genre: {selectedGenre}, Danceability: {dance}, Instrumentalness:{" "}
          {instrument}, Mode: {mode}, Tempo: {tempo}BPM, Valance: {valance}
        </div>

        {personalized.map((track, index) => (
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
      </div>
      {/* <div>
        {id ? (
          <div>
            <h1>Top 10 tracks from {artist} </h1>

            <img src={img} alt={artist} height="160" width="160" />
          </div>
        ) : null}

        {topTracks ? (
          <div className="tracks">
            {topTracks.map((elem, index) => (
              <div key={index}>
                {elem.name}{" "}
                <audio controls>
                  <source src={elem.preview_url} type="audio/ogg" />
                </audio>
              </div>
            ))}
          </div>
        ) : null}
      </div> */}
    </div>
  );
}

export default App;

// {
//   "genres": [
//     "acoustic",
//     "afrobeat",
//     "alt-rock",
//     "alternative",
//     "ambient",
//     "anime",
//     "black-metal",
//     "bluegrass",
//     "blues",
//     "bossanova",
//     "brazil",
//     "breakbeat",
//     "british",
//     "cantopop",
//     "chicago-house",
//     "children",
//     "chill",
//     "classical",
//     "club",
//     "comedy",
//     "country",
//     "dance",
//     "dancehall",
//     "death-metal",
//     "deep-house",
//     "detroit-techno",
//     "disco",
//     "disney",
//     "drum-and-bass",
//     "dub",
//     "dubstep",
//     "edm",
//     "electro",
//     "electronic",
//     "emo",
//     "folk",
//     "forro",
//     "french",
//     "funk",
//     "garage",
//     "german",
//     "gospel",
//     "goth",
//     "grindcore",
//     "groove",
//     "grunge",
//     "guitar",
//     "happy",
//     "hard-rock",
//     "hardcore",
//     "hardstyle",
//     "heavy-metal",
//     "hip-hop",
//     "holidays",
//     "honky-tonk",
//     "house",
//     "idm",
//     "indian",
//     "indie",
//     "indie-pop",
//     "industrial",
//     "iranian",
//     "j-dance",
//     "j-idol",
//     "j-pop",
//     "j-rock",
//     "jazz",
//     "k-pop",
//     "kids",
//     "latin",
//     "latino",
//     "malay",
//     "mandopop",
//     "metal",
//     "metal-misc",
//     "metalcore",
//     "minimal-techno",
//     "movies",
//     "mpb",
//     "new-age",
//     "new-release",
//     "opera",
//     "pagode",
//     "party",
//     "philippines-opm",
//     "piano",
//     "pop",
//     "pop-film",
//     "post-dubstep",
//     "power-pop",
//     "progressive-house",
//     "psych-rock",
//     "punk",
//     "punk-rock",
//     "r-n-b",
//     "rainy-day",
//     "reggae",
//     "reggaeton",
//     "road-trip",
//     "rock",
//     "rock-n-roll",
//     "rockabilly",
//     "romance",
//     "sad",
//     "salsa",
//     "samba",
//     "sertanejo",
//     "show-tunes",
//     "singer-songwriter",
//     "ska",
//     "sleep",
//     "songwriter",
//     "soul",
//     "soundtracks",
//     "spanish",
//     "study",
//     "summer",
//     "swedish",
//     "synth-pop",
//     "tango",
//     "techno",
//     "trance",
//     "trip-hop",
//     "turkish",
//     "work-out",
//     "world-music"
//   ]
// }
