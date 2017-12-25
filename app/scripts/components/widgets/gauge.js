import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Chart } from 'react-google-charts';

class Gauge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        backgroundColor: '#999',
        width: 400, height: 120,
        redFrom: 90, redTo: 100,
        yellowFrom:75, yellowTo: 90,
        minorTicks: 5
      },
      data: [
        ['Label', 'Value'],
        ['Memory', 80],
        ['CPU', 55],
        ['Network', 68]
      ],
    };
  }
  render() {
    return (
      <div>
        <Chart
          chartType="Gauge"
          data={this.state.data}
          graph_id="Gauge"
          width="100%"
          height="400px"
          legend_toggle
        />
      </div>
    );
  }
  componentDidMount() {
  }
}
export default Gauge