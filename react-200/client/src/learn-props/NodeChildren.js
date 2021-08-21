import React, { Component } from "react";

class NodeChildren extends Component {
  render() {
    let { children } = this.props;
    return <div>{children}</div>;
  }
}

export default NodeChildren;
