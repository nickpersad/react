import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      elapsed: 0
    }
    this.tick = this.tick.bind(this)
  }
  componentDidMount() {
    this.timer = setInterval(this.tick, 50);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick() {
    this.setState({elapsed: new Date() - this.props.start});
  }

  render() {
    // Calculate elapsed to tenth of a second:
    var elapsed = Math.round(this.state.elapsed / 100);

    // This will give a number with one digit after the decimal dot (xx.x):
    var seconds = (elapsed / 10).toFixed(1);

    // Although we return an entire <p> element, react will smartly update
    // only the changed parts, which contain the seconds variable.

    return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
  }


}
export default Timer