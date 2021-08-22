import { debounce, throttle } from "lodash";
import React from "react";
import { Component } from "react";

class ThrottleLoadash extends Component {
  throttleFunc = throttle(() => {
    console.log("Throttle API Call");
  }, 1000);

  render() {
    return (
      <div>
        <h2>검색어 입력</h2>
        <input type="text" onChange={this.throttleFunc} />
      </div>
    );
  }
}

export default ThrottleLoadash;
