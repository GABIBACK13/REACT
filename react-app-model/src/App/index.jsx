import React, { Component } from "react";

import "./app.css";

export default class App extends Component {
  state = {
    txt: 'Hello world',
  };

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const {txt} = this.state;

    return (
      <div className="App">
        <h1>{txt}</h1>
      </div>
    );
  }
}
