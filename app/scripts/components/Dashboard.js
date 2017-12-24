import React, { Component } from "react";
import { Chart } from 'react-google-charts';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        }
      },
      data: [
        ['City', '2010 Population',],
        ['New York City, NY', 8175000],
        ['Los Angeles, CA', 3792000],
        ['Chicago, IL', 2695000],
        ['Houston, TX', 2099000],
        ['Philadelphia, PA', 1526000],
      ],
    };
  }
  render() {
    return (
      <div className="col-xs-12 dashboardcont nopadding">

          <div className="dashboard-container col-xs-12">
            <h1>Dashboard</h1>
            <div className="row">
              <div className="chart-container col-xs-6">
                <Chart
                  chartType="BarChart"
                  data={this.state.data}
                  options={this.state.options}
                  graph_id="BarChart"
                  width="100%"
                  height="400px"
                  legend_toggle
                />
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
}

export default Dashboard