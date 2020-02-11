import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

class MovieBanner extends Component {
  render() {
    const {id, voteAverage, originalTitle, overview, posterPath, backdropPath} = this.props;
    const voteAveragePercentil = (voteAverage) * 100 / 10;

    var bgStyle = {
      backgroundImage: 'url(https://image.tmdb.org/t/p/w1400_and_h450_face/' + backdropPath + ')'
    };

    return (
      <Link to={'/movie/' + id} >
        <div className="movies__banner__bg" style={bgStyle}>
          <img className="movies__banner__poster" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${posterPath}`} alt={`${originalTitle} poster.`} />
            
          <div className="movies__banner__cont">
            <h2 className="title">{originalTitle}</h2>
            <p className="overview">{overview}</p>
          </div>
          

          <CircularProgressbar 
            value={voteAveragePercentil} 
            text={`${voteAverage}`} 
            styles={buildStyles({
              textColor: "#fff",
              pathColor: "#E50914",
              trailColor: "plate"
            })} 
          />
        </div>
      </Link>
    )
  }
}

export default MovieBanner;