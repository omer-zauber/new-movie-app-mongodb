import axios from "axios";
import { FETCH_MOVIES } from "./types";

export const addMovie = (movieData, history) => async dispatch => {
  const res = await axios.post("/api/addMovie", movieData);
  const { genre, year } = movieData;
  history.push("/", {
    genre,
    start: year,
    end: year
  });
  dispatch({ type: FETCH_MOVIES, payload: res.data });
};

export const searchMovies = (genre, start, end) => async dispatch => {
  const res = await axios.post("/api/searchMovies", {
    genre,
    start,
    end
  });

  dispatch({ type: FETCH_MOVIES, payload: res.data });
};

export const rateMovie = () => async dispatch => {
  const res = await axios.petch("/api/rateMovie");

  dispatch({ type: FETCH_MOVIES, payload: res.data });
};
