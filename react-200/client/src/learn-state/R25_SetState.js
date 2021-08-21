import React, { Component } from "react";

class R25_SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "번역",
    };
  }

  Statechange = (flag) => {
    if (flag === "ko") {
      this.state.StateString = "리액트 강제 변경";
      this.forceUpdate();
    }
    //if (flag === "ko") this.setState({ StateString: "리액트" });

    if (flag === "en") this.setState({ StateString: "react" });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={(e) => this.Statechange("ko", e)}>한글</button>
        <button onClick={(e) => this.Statechange("en", e)}>영문</button>
        <br />
        [state 변경하기] StateString : {this.state.StateString}
      </div>
    );
  }
}

export default R25_SetState;
