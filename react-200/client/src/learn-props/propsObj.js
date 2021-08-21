import React, { Component } from "react";
import datatype from "prop-types";

class PropsObj extends Component {
  render() {
    let { objectJSON } = this.props;
    return <div>{objectJSON}</div>;
  }
}

PropsObj.propTypes = {
  objectJSON: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number,
  }),
};

export default PropsObj;
