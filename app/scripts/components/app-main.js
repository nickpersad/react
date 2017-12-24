import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Dashboard from "./Dashboard";
import Movies from "./Movies";
import Help from "./Help";

import SearchBox from './search';
import Showing from './showing';
import Card from './card';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieID: 155 // set initital load movie - The Dark Knight
    }
  }
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <div id="sidebar-wrapper">
              <ul className="sidebar-nav">
                <li><NavLink exact to="/">Dashboard</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
                <li><NavLink to="/help">Help</NavLink></li>
              </ul>
            </div>
            <div className="content">
              <Route exact path="/" component={Dashboard}/>
              <Route path="/movies" component={Movies}/>
              <Route path="/help" component={Help}/>
            </div>
          </div>
        </HashRouter>
        <SearchBox fetchMovieID={this.fetchMovieID.bind(this)} />
        <Card data={this.state} />
        <img id="dp" src="https://www.themoviedb.org/static_cache/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png"/>
        <Showing />
      </div>
    )
  } // END render

  // the api request function
  fetchApi(url) {
    fetch(url).then((res) => res.json()).then((data) => {
      var genreArr = []
      var genreVerbage = 'Genre'
      for (var genre in data.genres) {
        genreArr.push(data.genres[genre]['name'])
      }

      if (genreArr.length > 1) {
        genreVerbage = 'Genres'
      }
      // update state with API data
      this.setState({
        movieID: data.id,
        original_title: data.original_title,
        tagline: data.tagline,
        overview: data.overview,
        homepage: data.homepage,
        poster: data.poster_path,
        production: data.production_companies,
        production_countries: data.production_countries,
        genre: genreArr.join(', '),
        genreVerbage: genreVerbage,
        release: data.release_date,
        vote: data.vote_average,
        runtime: data.runtime,
        revenue: data.revenue,
        backdrop: data.backdrop_path

      })
    })

  } // end function

  fetchMovieID(movieID) {
    let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=ef77c3eda1e7e0c11a7c04c61b0d4151`
    this.fetchApi(url)
  } // end function

  componentDidMount() {
    let url = `https://api.themoviedb.org/3/movie/${this.state.movieID}?&api_key=ef77c3eda1e7e0c11a7c04c61b0d4151`

    this.fetchApi(url)

    //========================= BLOODHOUND ==============================//
    let suggests = new Bloodhound({
      datumTokenizer: function(datum) {
        return Bloodhound.tokenizers.whitespace(datum.value);
      },
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: 'https://api.themoviedb.org/3/search/movie?query=%QUERY&api_key=ef77c3eda1e7e0c11a7c04c61b0d4151',
        filter: function(movies) {
          // Map the remote source JSON array to a JavaScript object array
          return $.map(movies.results, function(movie) {
            return {
              value: movie.original_title, // search original title
              id: movie.id // get ID of movie simultaniously
            };
          });
        } // end filter
      } // end remote
    }); // end new Bloodhound

    suggests.initialize(); // initialise bloodhound suggestion engine

    //========================= END BLOODHOUND ==============================//

    //========================= TYPEAHEAD ==============================//
    // Instantiate the Typeahead UI
    $('.typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 2
    }, {source: suggests.ttAdapter()}).on('typeahead:selected', function(obj, datum) {
      this.fetchMovieID(datum.id)
    }.bind(this)); // END Instantiate the Typeahead UI
    //========================= END TYPEAHEAD ==============================//

    $(document).on('click', '.card', function(e) {
      e.preventDefault()
      $('.searchbox__input').val('')
      this.fetchMovieID(e.toElement.offsetParent.id)
      $("html, body").animate({ scrollTop: 0 }, "slow")
    }.bind(this));

  } // end component did mount function

  // } // END CLASS - APP
}
module.exports = App;
