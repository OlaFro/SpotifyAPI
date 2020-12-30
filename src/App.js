import "./App.css";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Player from "./components/Player";
import { useSelector } from "react-redux";

function App() {
  const recommendations = useSelector((state) => state.recommendations);
  // function createPlaylist(e) {
  //   e.preventDefault();
  //   axios({
  //     url: "https://api.spotify.com/v1/users/faltblatt/playlists",
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       Authorization: "Bearer " + token,
  //     },
  //     data: {
  //       public: false,
  //     },
  //   });
  // }

  return (
    <div className="App">
      <Form1 />
      <Form2 />
      <Form3 />
      {recommendations ? <Player /> : null}
    </div>
  );
}

export default App;
