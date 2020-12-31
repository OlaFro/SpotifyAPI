import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGenre, setDance, setInstrument, currStep } from "../redux/actions";
import { genres } from "../helpers/genres";

export default function Form1() {
  const genre = useSelector((state) => state.genre);
  const dance = useSelector((state) => state.dance);
  const instrument = useSelector((state) => state.instrument);
  const dispatch = useDispatch();

  function handleGenre(e) {
    dispatch(setGenre(e.target.value));
  }
  function handleDance(e) {
    dispatch(setDance(e.target.value));
  }

  function handleInstrument(e) {
    dispatch(setInstrument(e.target.value));
  }

  function sendForm1(e) {
    e.preventDefault();
    if (genre && dance && instrument) {
      dispatch(currStep("Form2"));
    }
  }

  return (
    <div>
      <div>Choose your favorite genre</div>
      <select type="submit" value={genre} onChange={handleGenre}>
        <option value="">choose your genre</option>
        {genres.map((elem) => (
          <option value={`${elem}`} key={`${elem}`}>
            {elem}
          </option>
        ))}
      </select>
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
      <input type="submit" value="next" onClick={sendForm1} />
    </div>
  );
}
