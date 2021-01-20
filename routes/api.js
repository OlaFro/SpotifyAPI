const express = require("express");
const router = express.Router();
const axios = require("axios");

let url1 = "https://accounts.spotify.com/api/token";
let url2 = "https://api.spotify.com/v1/recommendations";

router.post("/query", async (req, res, next) => {
  let data = req.body;
  let recommendations = [];

  let response1 = await axios({
    url: url1,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
        ).toString("base64"),
    },
    data: "grant_type=client_credentials",
  });
  let token = response1.data.access_token;

  axios({
    url: `${url2}?limit=12&market=DE&seed_genres=${data.genre}&target_instrumentalness=${data.instrument}&target_valance=${data.valance}&target_danceability=${data.dance}&target_mode=${data.mode}&${data.tempo}&target_popularity=${data.popularity}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      recommendations = response.data.tracks;
      console.log(recommendations);
      res.send(recommendations);
    })
    .catch((err) => console.log(err));
});
module.exports = router;
