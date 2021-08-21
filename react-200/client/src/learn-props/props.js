import React, { Component } from "react";

class Props extends Component {
  render() {
    let appValue = this.props.appInput;

    return <div>{(appValue += " from App.js by props.js")}</div>;
  }
}

export default Props;
