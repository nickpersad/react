import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Movies from "./Movies";
import Help from "./Help";

class App extends Component {
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
                <li><NavLink to="/login">Login</NavLink></li>
              </ul>
            </div>
            <div className="content">
              <Route exact path="/" component={Dashboard}/>
              <Route path="/movies" component={Movies}/>
              <Route path="/help" component={Help}/>
              <Route path="/login" component={Login}/>
            </div>
          </div>
        </HashRouter>
      </div>
    )
  } // END render

  // } // END CLASS - APP
}
module.exports = App;
