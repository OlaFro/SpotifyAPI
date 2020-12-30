export function setGenre(genre) {
  return {
    type: "SET_GENRE",
    payload: genre,
  };
}

export function setDance(dance) {
  return {
    type: "SET_DANCE",
    payload: dance,
  };
}

export function setInstrument(instrument) {
  return {
    type: "SET_INSTRUMENT",
    payload: instrument,
  };
}

export function setMode(mode) {
  return {
    type: "SET_MODE",
    payload: mode,
  };
}

export function setTempo(tempo) {
  return {
    type: "SET_TEMPO",
    payload: tempo,
  };
}

export function setPopularity(popularity) {
  return {
    type: "SET_POPULARITY",
    payload: popularity,
  };
}

export function setValance(valance) {
  return {
    type: "SET_VALANCE",
    payload: valance,
  };
}

export function getRecommendations(recommendations) {
  return {
    type: "RECOMMENDATIONS",
    payload: recommendations,
  };
}

export function getToken(token) {
  return {
    type: "GET_TOKEN",
    payload: token,
  };
}
