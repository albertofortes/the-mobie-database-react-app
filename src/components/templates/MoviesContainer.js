import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import MovieBanner from './MovieBanner';

import { lastMovie, nowPlayingMovie, topRatedMovies, popularMovies } from '../../actions/searchActions';

class MoviesContainer extends Component {
  componentDidMount() {
    this.props.lastMovie();
    this.props.nowPlayingMovie();
    this.props.topRatedMovies();
    this.props.popularMovies();
  }

  render() {
    const {movies} = this.props;
    let content = [];
    let movieBanner;
    let moviesIndex = 0;
    let moviesSliced = movies.slice(0, 16); // slice it due to API always returns at least 20 items.

    for (const prop in moviesSliced) {      
      if(moviesIndex===0) {
        movieBanner = <MovieBanner key={moviesSliced[prop]['id']} id={moviesSliced[prop]['id']} releaseDate={moviesSliced[prop]['release_date']} originalTitle={moviesSliced[prop]['original_title']} voteAverage={moviesSliced[prop]['vote_average']} overview={moviesSliced[prop]['overview']} posterPath={moviesSliced[prop]['poster_path']} backdropPath={moviesSliced[prop]['backdrop_path']} />;
      } else {
        content.push( <MovieCard key={moviesSliced[prop]['id']} id={moviesSliced[prop]['id']} releaseDate={moviesSliced[prop]['release_date']} originalTitle={moviesSliced[prop]['original_title']} voteAverage={moviesSliced[prop]['vote_average']} overview={moviesSliced[prop]['overview']} posterPath={moviesSliced[prop]['poster_path']} backdropPath={moviesSliced[prop]['backdrop_path']} /> );
      }
      moviesIndex++;
    };

    return (
      <div>
        <div className="movies__banner">
          {movieBanner}
        </div>
        <div className="movies__container">
          {content}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  now_playing_movie: state.movies.movies,
  movies: state.movies.movies,
  top_rated_movies: state.movies.topRatedMovies,
  popular_movies: state.movies.popularMovies,
  last_movie: state.movies.movie
})

export default connect(mapStateToProps, {lastMovie, nowPlayingMovie, topRatedMovies, popularMovies})(MoviesContainer);