import { debounce } from "lodash";
import React from "react";
import { Component } from "react";

class reactDebounce extends Component {
  debounceFunc = debounce(() => {
    console.log("Debounce API Call");
  }, 1000);
  render() {
    return (
      <div>
        <h2>검색어 입력</h2>
        <input type="text" onChange={this.debounceFunc} />
      </div>
    );
  }
}

export default reactDebounce;
