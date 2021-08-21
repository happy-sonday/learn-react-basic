import React, { Component } from "react";

class DefaultVal extends Component {
  render() {
    let { reactString, reactNumber } = this.props;
    return (
      <div>
        {reactString} {reactNumber}
      </div>
    );
  }
}

DefaultVal.defaultProps = {
  reactString: "기본 리액트",
  reactNumber: 200,
};

export default DefaultVal;
