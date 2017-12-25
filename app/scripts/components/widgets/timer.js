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
    var elapsed = Math.round(this.state.elapsed / 100);
    var seconds = (elapsed / 10).toFixed(1);

    return <p>This example was started <b>{seconds} seconds</b> ago.</p>;
  }


}
export default Timer