import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LAST_MOVIE, NOW_PLAYING_MOVIE, TOP_RATED_MOVIES, POPULAR_MOVIES } from '../actions/types';
import { APIKey } from '../APIKey';
import axios from 'axios';

export const searchMovie = (text) => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  })
}

export const fetchMovies = text => dispatch => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&total_results=5&query=${text}`)
    .then(response => dispatch({
      type: FETCH_MOVIES,
      payload: response.data.results
    }))
    .catch(err => console.log(err));
}

export const fetchMovie = id => dispatch => {
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US`)
    .then(response => dispatch({
      type: FETCH_MOVIE,
      payload: response.data
    }))
    .catch(err => console.log(err));
}

export const lastMovie = () => dispatch => {
  axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${APIKey}&language=en-US`)
    .then(response => dispatch({
      type: LAST_MOVIE,
      payload: response.data
    }))
    .catch(err => console.log(err));
}

export const nowPlayingMovie = () => dispatch => {
  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=en-US&page=1`)
    .then(response => dispatch({
      type: NOW_PLAYING_MOVIE,
      payload: response.data.results
    }))
    .catch(err => console.log(err));
}

export const topRatedMovies = () => dispatch => {
  axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=en-US&page=1`)
    .then(response => dispatch({
      type: TOP_RATED_MOVIES,
      payload: response.data
    }))
    .catch(err => console.log(err));
}

export const popularMovies = () => dispatch => {
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
    .then(response => dispatch({
      type: POPULAR_MOVIES,
      payload: response.data.results
    }))
    .catch(err => console.log(err));
}
