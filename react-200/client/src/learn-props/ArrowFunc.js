import React, { Component } from "react";

class ArrowFunc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFunc: "React200",
      num: 3,
    };
  }

  componentDidMount() {
    Function1(300000000000000000);
    this.Function3();
    this.Function5();

    function Function1(num) {
      return console.log(num);
    }
  }

  Function2 = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(`sum is ${num3} and Arrow Function : ${this.state.arrowFunc}`);
  };

  Function3() {
    let this_window = this;
    setTimeout(function () {
      console.log(this_window.state.num);
      console.log(this.state.ArrowFunc);
    }, 3000);
  }

  Function5 = () => {
    console.log(this.state.arrowFunc);
  };

  render() {
    return <h2>[THIS IS Arrow Function ]</h2>;
  }
}

export default ArrowFunc;
