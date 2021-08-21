import React, { Component } from "react";

class BasicState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: this.props.reactString,
      StateNumber: 200,
    };
  }

  render() {
    return (
      <div>
        {this.state.StateString}
        {this.state.StateNumber}
      </div>
    );
  }
}

export default BasicState;
