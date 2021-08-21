import React, { Component } from "react";

class CheckBoolean extends Component {
  render() {
    let { BooleanTrueFalse } = this.props;
    return (
      <div>
        {BooleanTrueFalse ? "2." : "1. "}
        {BooleanTrueFalse.toString()}
      </div>
    );
  }
}
export default CheckBoolean;
