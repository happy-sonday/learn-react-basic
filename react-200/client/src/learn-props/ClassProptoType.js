import React, { Component } from "react";

class ClassPrototype extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let ExamCountFunc = (function () {
      function ExamCount(num) {
        this.number = num;
      }
      ExamCount.prototype.showNum = function () {
        console.log("1. react_" + this.number);
      };

      return ExamCount;
    })();

    let cnt = new ExamCountFunc("200");
    cnt.showNum();

    class ExamCountClass {
      constructor(num2) {
        this.number2 = num2;
      }

      showNum() {
        console.log(`2. react_${this.number2}`);
      }
    }

    let cnt2 = new ExamCountClass("2hundred");
    cnt2.showNum();
  }

  render() {
    return <h2>[THIS IS Class ]</h2>;
  }
}

export default ClassPrototype;
