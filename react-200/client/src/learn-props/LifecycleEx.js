import React, { Component } from "react";

class LifeCycle extends Component {
  //constructor 이후 실행, 컴포넌트가 새로운 props를 받게 됐을 때, state를 변경해준다.
  static getDerivedStateFromProps(props, state) {
    console.log(`2. getDerivedStateFromProps Call:${props.prop_value} `);
    return { tmp_state: props.prop_value };
  }
  constructor(props) {
    super(props);
    this.state = {};

    //컴포넌트 생성시, 첫번째 호출 및 한번만 실행
    console.log("1. constructor Call");
  }

  //render()함수가 코드를 화면에 그려준 후에 실행된다. 모든 화면이 그려진 후에 실행해야되는 이벤트 처리, 초기화등에 많이 활용 되는 함수
  componentDidMount() {
    console.log("4. componentDidMount Call");
    console.log(`5. tmp_state : ${this.state.tmp_state}`);
    this.setState({ tmp_state2: true });
  }

  shouldComponentUpdate(props, state) {
    console.log(
      `6. shouldComponentUpdate Call / temp_state2 = ${state.tmp_state2}`
    );

    return state.tmp_state2;
  }

  render() {
    //컴포넌트 생성시, 화면 내뇽이 변경돼야 할 시점에 자동 호출
    console.log("3. render Call");
    return <h2>[THIS IS RENDER FUNCTION]</h2>;
  }
}

export default LifeCycle;
