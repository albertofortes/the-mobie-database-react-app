import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class MovieCard extends Component {
  render() {
    const {id, releaseDate, voteAverage, originalTitle, posterPath} = this.props;
    const voteAveragePercentil = (voteAverage) * 100 / 10;

    return (
      <div className="movies__container__card">
        <Link className="" to={'/movie/' + id} >
          <img className="poster" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${posterPath}`} alt={`${originalTitle} poster.`} />
          
          <CircularProgressbar 
            value={voteAveragePercentil} 
            text={`${voteAverage}`} 
            background
            backgroundPadding={6} 
            styles={buildStyles({
              backgroundColor: "E50914",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
              textSize: "19px"
            })} 
          />

          <div className="card__content">
            <h3 className="card__content__title">{originalTitle}</h3>
            <p className="card__content__date">{releaseDate}</p>
          </div>
        </Link>
      
      </div>
    )
  }
}

export default MovieCard;