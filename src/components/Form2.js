import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMode, setTempo } from "../redux/actions";

export default function Form2() {
  const mode = useSelector((state) => state.mode);
  const tempo = useSelector((state) => state.tempo);
  const dispatch = useDispatch();

  function handleMode(e) {
    let selected;
    e.target.value === "major" ? (selected = 1) : (selected = 0);
    dispatch(setMode(selected));
  }
  function handleTempo(e) {
    dispatch(setTempo(e.target.value));
  }

  return (
    <div style={{ border: "1px solid black" }}>
      <div>
        <input type="radio" name="mode" value="major" onClick={handleMode} />
        <label htmlFor="major">major</label>
        <input type="radio" name="mode" value="minor" onClick={handleMode} />
        <label htmlFor="major">minor</label>
      </div>
      <div>
        <label htmlFor="tempo">tempo</label>
        <input
          type="number"
          name="tempo"
          min="60"
          max="180"
          step="10"
          onChange={handleTempo}
        />{" "}
        BPM
      </div>
      <input type="button" value="next" />
    </div>
  );
}
