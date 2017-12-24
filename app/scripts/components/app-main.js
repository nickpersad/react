import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Dashboard from "./Dashboard";
import Movies from "./Movies";
import Help from "./Help";

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
      </div>
    )
  } // END render

  // } // END CLASS - APP
}
module.exports = App;
