import React, { Component } from "react";

export default function withHocComponent(InComponent, InComponentName) {
  return class Outcomponent extends Component {
    componentDidMount() {
      console.log(`3. InComponentName:${InComponentName}`);
    }

    render() {
      console.log(`1. InComponent render`);
      console.log(`get props ${this.props.name} at withHocComponent`);
      return <InComponent {...this.props} />;
    }
  };
}
