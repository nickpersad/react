import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Chart } from 'react-google-charts';

class Pie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        backgroundColor: '#999'
      },
      data: [
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
      ],
    };
  }
  render() {
    return (
      <div>
        <Chart
          chartType="PieChart"
          data={this.state.data}
          graph_id="PieChart"
          width="100%"
          height="400px"
          legend_toggle
        />
      </div>
    );
  }
}

export default Pie