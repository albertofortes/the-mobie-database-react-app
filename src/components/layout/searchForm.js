import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchMovie, fetchMovies } from '../../actions/searchActions';

class SearchForm extends Component {

  onChange = e => {
    this.props.searchMovie(e.target.value);
  }

  onSubmit = e => {
    this.props.fetchMovies(this.props.text);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="search__form" noValidate autoComplete="off">
        <label className="sr-only" htmlFor="s">Search movies</label>
        <input onChange={this.onChange} type="text" placeholder="Search movies" className="search__form__field" name="s" />
      </form>
    )
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
})

export default connect(mapStateToProps, { searchMovie, fetchMovies })(SearchForm);
