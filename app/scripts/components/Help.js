import React, { Component } from "react";

class Help extends React.Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
  }
  componentWillMount() {
    document.body.style.backgroundImage = '';
  }
}

export default Help