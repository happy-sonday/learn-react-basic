/* import "./App.css"; */

import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

import StrAddButton from "./StrAddButton";

class App extends Component {
  render() {
    console.log(this.props.store.getState().data);
    return (
      <div>
        <h1>Start React 200!</h1>
        <span>{this.props.store.getState().data.str}</span>
        <br />
        <StrAddButton store={this.props.store} />
        <br />
        버튼을 누르면 200 문자열 추가
      </div>
    );
  }
}

export default App;
