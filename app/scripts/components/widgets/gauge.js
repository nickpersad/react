import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Chart } from 'react-google-charts';

class Gauge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        width: 400, height: 120,
        redFrom: 90, redTo: 100,
        yellowFrom:75, yellowTo: 90,
        minorTicks: 5
      },
      data: [
        ['Label', 'Value'],
        ['Memory', 0],
        ['CPU', 0],
        ['Network', 0]
      ],
    };
    this.changeData = this.changeData.bind(this)
  }
  componentDidMount() {
    // this.changeData = setInterval(this.changeData, 500);
    this.toggleGauge(0)
  }
  componentWillUnmount() {
    clearInterval(this.changeData);
  }
  changeData() {
    this.setState({data: [
        ['Label', 'Value'],
        ['Memory', Math.floor(Math.random() * 100) + 1],
        ['CPU', Math.floor(Math.random() * 100) + 1],
        ['Network', Math.floor(Math.random() * 100) + 1]
      ]
    });
  }
  zeroOutData() {
    this.setState({data: [
        ['Label', 'Value'],
        ['Memory', 0],
        ['CPU', 0],
        ['Network', 0]
      ]
    });
  }
  toggleGauge(action) {
    if (action !== 1) {
      this.changeData = setInterval(this.changeData, 500);
    } else {
      clearInterval(this.changeData);
      this.zeroOutData()
    }
  }
  render() {
    return (
      <div>
        <Chart
          chartType="Gauge"
          data={this.state.data}
          graph_id="Gauge"
          width="100%"
          height="300px"
          legend_toggle
        />
        <button type="button" className="btn btn-primary" onClick={this.toggleGauge.bind(this, 1)}>Stop</button>
      </div>
    );
  }
}
export default Gauge