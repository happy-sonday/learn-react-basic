import React, { Component, createRef } from "react";

class RefBasic extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  RefFocus = (e) => {
    this.inputRef.current.focus();
  };

  JSFocus() {
    document.getElementById("id").focus();
  }

  render() {
    return (
      <>
        <input id="id" type="text" ref={this.inputRef} />
        <button onClick={this.RefFocus}>Ref Focus</button>
        <button onClick={this.JSFocus}>JS Focus</button>
      </>
    );
  }
}

export default RefBasic;
