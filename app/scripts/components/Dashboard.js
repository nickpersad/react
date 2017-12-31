import React, { Component } from "react";
import Bar from './widgets/bar';
import Pie from './widgets/pie';
import Gauge from './widgets/gauge';
import Timer from './widgets/timer';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="col-xs-12 dashboardcont nopadding">

          <div className="dashboard-container col-xs-12">
            <div className="main-page-header">
              <div className="container">
                <h1>Dashboard</h1>
              </div>
            </div>
            <div className="row">
              <div className="chart-container col-sm-12 col-md-6">
                <div className="row">
                  <div className="col-xs-12">
                    <h3>Population of Largest U.S. Cities</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <Bar />
                  </div>
                </div>
              </div>
              <div className="chart-container col-sm-12 col-md-6">
                <div className="row">
                  <div className="col-xs-12">
                    <h3>Pie</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <Pie />
                  </div>
                </div>
              </div>
              <div className="chart-container col-sm-12 col-md-6">
                <div className="row">
                  <div className="col-xs-12">
                    <h3>Gauges</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <Gauge />
                  </div>
                </div>
              </div>
              <div className="chart-container col-sm-12 col-md-6">
                <div className="row">
                  <div className="col-xs-12">
                    <h3>Timer</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <Timer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
  componentWillMount() {
    document.body.style.backgroundImage = '';
    document.body.style.background = '#f5f5f5';
    document.getElementById('outer-container').style.background = '#f5f5f5';
  }
}

export default Dashboard