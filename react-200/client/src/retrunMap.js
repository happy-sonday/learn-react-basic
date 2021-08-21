import React, { Component } from "react";

class ReturnMAp extends Component {
  render() {
    const element_Array = [<li>react</li>, <li>200</li>, <li>Array Map</li>];
    return <ul>{element_Array.map((val) => val)}</ul>;
  }
}

export default ReturnMAp;
