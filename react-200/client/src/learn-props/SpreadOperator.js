import React, { Component } from "react";

class SpreadOperator extends Component {
  componentDidMount() {
    let obj1 = { key1: "키1", objKey1: "키2" };
    let obj2 = { objKey1: "키3", objKey2: "키4" };

    let sumLetObj = { ...obj1, ...obj2 };
    console.log(
      `spread연산자를 이용한 배열 재할당 ${JSON.stringify(sumLetObj)}`
    );
    let { key1, keyCopy, ...other } = sumLetObj;
    console.log(`구조 분해 결과값 : ${key1} ${keyCopy}, ${other.objKey2}`);
  }

  render() {
    return <h2>[THIS IS SpreadOperator ]</h2>;
  }
}

export default SpreadOperator;
