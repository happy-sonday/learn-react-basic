import React, { Component } from "react";

class ChangEvnt extends Component {
  change = (e) => {
    let val = e.target.value;
    console.log(val);
  };

  render() {
    return (
      <>
        <input type="text" onChange={this.change} />
        <select onChange={this.change}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </>
    );
  }
}

export default ChangEvnt;
