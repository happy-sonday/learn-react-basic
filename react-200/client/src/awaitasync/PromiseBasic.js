import React, { Component } from "react";
class PromiseBasic extends Component {
  componentDidMount() {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("react");
      }, 1500);
    })
      .then((result) => {
        console.log(result);
        return result + 200;
      })
      .then((result) => {
        console.log(result);
      });
  }

  render() {
    return <h1>Promise</h1>;
  }
}

export default PromiseBasic;
