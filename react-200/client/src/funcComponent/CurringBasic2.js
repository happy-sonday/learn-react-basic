import React, { Component } from "react";

class CurringBasic2 extends Component {
  componentDidMount() {
    const greetHelllo = this.greetCurried("Hello");
    greetHelllo("Sonday");
    greetHelllo("sonshine");

    this.greetCurried("Hi there")("Smiler");

    const greetAwkwardly =
      this.greetDeeplyCurried("Heeeeellloooow")("~~~~~~~~~")("?");
    greetAwkwardly("sonday");

    const againHello = this.greetDeeplyCurried("re~hi")("!!");
    againHello(". How do you do?")("sonday");
  }
  greet = (greeting, name) => {
    console.log(`${greeting} , ${name}`);
  };

  greetCurried = (greeting) => (name) => console.log(`${greeting} , ${name}`);

  greetDeeplyCurried = (greeting) => (separator) => (emphasis) => (name) =>
    console.log(`${greeting}${separator}${name}${emphasis}`);

  render() {
    return (
      <>
        <h1>greetCurried Function</h1>
      </>
    );
  }
}

export default CurringBasic2;
