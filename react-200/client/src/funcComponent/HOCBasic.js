import React, { Component } from "react";
import withHocComponent from "./WithHocComponent";

class HOCBasic extends Component {
  render() {
    console.log(`2. HOCComponent render`);
    console.log(`${this.props.name} at HOCBasic`);
    return (
      <>
        <h2>props.name: {this.props.name}</h2>
      </>
    );
  }
}

export default withHocComponent(HOCBasic, "HOCBasic");
