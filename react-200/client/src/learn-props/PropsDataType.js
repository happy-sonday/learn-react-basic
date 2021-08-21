import React, { Component } from "react";
import PropTypes from "prop-types";

class CheckValue extends Component {
  render() {
    let { name } = this.props;
    return (
      <div>
        <h1>Props Type Check</h1>
        <p>{name}</p>
      </div>
    );
  }
}

CheckValue.protoTypes = {
  name: PropTypes.number,
};

export default CheckValue;
