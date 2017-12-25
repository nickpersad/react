import React, { Component } from "react";
import Bar from './widgets/bar';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="col-xs-12 dashboardcont nopadding">

          <div className="dashboard-container col-xs-12">
            <h1>Dashboard</h1>
            <div className="row">
              <div className="chart-container col-xs-6">
                <Bar />
              </div>
              <div className="chart-container col-xs-6">
                <div className="chart">
                  <p>chart 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
  componentWillMount() {
    document.body.style.backgroundImage = '';
  }
}

export default Dashboard