// depending on the type of the action will set a new state
// the data which is coming from the action
import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LAST_MOVIE, NOW_PLAYING_MOVIE, TOP_RATED_MOVIES, POPULAR_MOVIES } from '../actions/types';

const initialState = {
  text: '',
  movies: [], // JSON data returned
  loading: false,
  movie: [],
  topRatedMovies: [],
  popularMovies: []
}

export default function( state = initialState, action ) {
  switch( action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload, // searchAction.js dispatch payload: text
        loading: false
      }

    case FETCH_MOVIES:
        return {
          ...state,
          movies: action.payload
        }

    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload
      }

    case LAST_MOVIE:
      return {
        ...state,
        movie: action.payload
      }

    case NOW_PLAYING_MOVIE:
      return {
        ...state,
        movies: action.payload
      }

    case TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload
      }

    case POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload
      }
    
    default:
      return state
  }
}
