import React, { PureComponent } from "react";

class R28_PureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "리액트",
      StateArrayObj: ["리액트", { react: "200" }],
    };
  }

  buttonClick = (type) => {
    if (type === "String") {
      this.setState({ StateString: "리액트" });
    } else {
      this.setState({ StateArrayObj: ["react", { react: "200" }] });
    }
  };

  render() {
    console.log(this.state);
    console.log("render()실행");
    return (
      <div>
        <button onClick={(e) => this.buttonClick("String")}>문자열 변경</button>
        <button onClick={(e) => this.buttonClick("Object")}>
          객체 배열 변경
        </button>
      </div>
    );
  }
}

export default R28_PureComponent;
