import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Chart } from 'react-google-charts';

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        },
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
      <div>
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
    );
  }
}

export default Bar