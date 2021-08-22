import React, { Component } from "react";

class KeyboardEvnt extends Component {
  onKey(event, e) {
    let val = e.target.value;
    console.log(`event name: ${event} ,  value: ${val}`);
  }
  render() {
    return (
      <>
        onKeyUp :
        <input type="text" onKeyUp={(e) => this.onKey("onKeyUp", e)} /> <br />
        <br />
        연속 입력 받음
        <br />
        onKeyDown :
        <input type="text" onKeyDown={(e) => this.onKey("onKeyDown", e)} />{" "}
        <br />
        <br />
        연속 입력은 받지만 백스페이스는 못 읽음
        <br /> onKeyPress :
        <input type="text" onKeyPress={(e) => this.onKey("onKeyPress", e)} />
        <br />
      </>
    );
  }
}

export default KeyboardEvnt;
