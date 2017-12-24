import React, { Component } from 'react';
import ReactDOM from 'react-dom';
const TMDBLogo = 'https://www.themoviedb.org/assets/static_cache/22af8ff1419ab3b085608e48ae299d1e/images/v4/logos/stacked-green.svg';

class SearchBox extends Component {
  handleChange(event) {
    event.target.select();
  }
  render() {
    return (
      <div className="col-xs-12 search-container nopadding">
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <a href="./" title="ReactJS TMDb Movie Search"><img src={TMDBLogo} className="logo" alt="The Movie Database" /></a>
          </div>
          <div className="col-xs-12 col-sm-6">
            <form className="searchbox">
              {/* <label> */}
                <input ref="search suggestion" onClick={this.handleChange} className="searchbox__input typeahead form-control" type="text" placeholder="Search Movie Title..." id="q" />
              {/* </label> */}
              </form>
          </div>
        </div>
      </div>
    )
  }
}
module.exports = SearchBox;
