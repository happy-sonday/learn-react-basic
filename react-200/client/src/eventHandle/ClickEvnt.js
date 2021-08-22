import React, { Component } from "react";

class ClickEvnt extends Component {
  buttonClick = (param) => {
    if (typeof param != "string") {
      console.log(param.target.outerText);
      return;
    }
    console.log(`param result is ${param}`);
  };

  render() {
    return (
      <>
        <button onClick={(e) => this.buttonClick("button")}>
          Click Button
        </button>
        <div onClick={(e) => this.buttonClick("div")}>Click div</div>
        <a href="javascript:" onClick={this.buttonClick}>
          Click a
        </a>
      </>
    );
  }
}

export default ClickEvnt;
