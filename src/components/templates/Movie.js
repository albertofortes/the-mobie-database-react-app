import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchMovie } from '../../actions/searchActions';

import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      bgStyle: {} 
    };
  }

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id); // id of movie is inserted in URL params
  }

  _getNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  _getYear(dateString){
    let release_date = new Date(dateString);
    return release_date.getFullYear();
  }

  setBgStyles(path) {
    return {
      backgroundImage: 'url(https://image.tmdb.org/t/p/w1400_and_h450_face/' + path + ')'
    };
  }

  setPoster(path) {
    return 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + path;
  }

  getGenres(movie) {
    let genres = '';
    let genresIndex = 0;
    for (const prop in movie.genres) {
      genres += (genresIndex !== 0) ? ", " + movie.genres[prop]['name'] : movie.genres[prop]['name'];
      genresIndex++;
    };
    return genres;
  }

  render() {
    const containerClass = (this.props.location.pathname.match("/movie")) ?  "movies__banner__cont inner" : "movies__banner__cont";   
    const { movie } = this.props;
    const voteAveragePercentil = (movie.vote_average) * 100 / 10;
    let genres = this.getGenres(movie);

    return (
      <React.Fragment>
        <div className="movies__banner movies__banner--detail">
          <div className="movies__banner__bg" style={this.setBgStyles(movie.backdrop_path)}>
            <img className="movies__banner__poster" src={this.setPoster(movie.poster_path)} alt={`${movie.original_title} poster.`} />
              
            <div className={containerClass}>
              <h2 className="title">{movie.original_title}</h2>
              <p className="tagline">{movie.tagline}</p>
              <p className="overview">{movie.overview}</p>
              <p><strong>Release year:</strong> {this._getYear(movie.release_date)}</p>
              <p><strong>Genres:</strong> {genres}</p>
              {(movie.budget) ? <p><strong>Budget:</strong> ${this._getNumberWithCommas(movie.budget)}</p> : null }
              {(movie.revenue) ? <p><strong>Revenue:</strong> ${this._getNumberWithCommas(movie.revenue)}</p> : null }
              {(movie.homepage) ? <p><strong>Official website:</strong> <a href="{movie.homepage}" target="blank">{movie.homepage}</a></p> : null }
            </div>

            <CircularProgressbar 
              value={voteAveragePercentil} 
              text={`${movie.vote_average}`} 
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#E50914",
                trailColor: "plate"
              })} 
            />  
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
})

export default connect(mapStateToProps, {fetchMovie})(withRouter(Movie));