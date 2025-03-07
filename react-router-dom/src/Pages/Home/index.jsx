import React, { Component } from "react";

import "./home.css";

export default class Home extends Component {
  state = {
    txt: 'Hello world',
  };
  render() {
    const {txt} = this.state;

    return (
      <div className="App">
        <h1>{txt}</h1>
      </div>
    );
  }
}
