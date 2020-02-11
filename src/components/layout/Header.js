import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import logoReact from '../../images/logo-react.svg';
import logoTheMovieDb from '../../images/logo-themoviedb.svg';

import SearchForm from './searchForm';

class Header extends Component  {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <h1 className="sr-only">ReactJs + The mobie Db. Hobby quick project by Alberto Fortes Senior Front-end developer. CSS, JavaScript, React, Gatsby…</h1>
          <div className="header__logos">
            <img src={logoTheMovieDb} className="logo" alt="the Movie Database logo" />
            <span className="plus">+</span>
            <img src={logoReact} className="logo logo--animated" alt="React JS logo" />
          </div>

          <div className="header__right">
            <nav className="header__nav">
              {/*<Link to="/">Home</Link>*/}
              <a href="/" title="Back to homepage">Home</a>
            </nav>
            {!(this.props.location.pathname.match("/movie")) ? <SearchForm /> : null }
          </div>
        </div>      
      </div>
    )
  }
}

export default withRouter(Header);