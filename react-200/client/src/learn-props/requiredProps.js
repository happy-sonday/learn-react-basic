import React, { Component } from "react";
import datatype from "prop-types";

class ReqProps extends Component {
  render() {
    let { reactNum, rectStr } = this.props;
    return (
      <div>
        {reactNum} {rectStr}
      </div>
    );
  }
}

ReqProps.propTypes = {
  rectStr: datatype.string.isRequired,
};

export default ReqProps;
