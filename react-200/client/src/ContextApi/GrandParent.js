import React from "react";
import Parent from "./ParentComponent";

const { Provider, Consumer } = React.createContext();
export { Consumer };

class GrandParent extends React.Component {
  constructor(props) {
    super(props);
    this.setStateFunc = this.setStateFunc.bind(this);
  }

  setStateFunc(value) {
    this.setState({ name: value });
  }

  render() {
    const content = {
      ...this.state,
      setStateFunc: this.setStateFunc,
    };
    return (
      //NOTE:부모->손자
      /*       <Provider value="React200">
        <Parent />
      </Provider> */
      //NOTE:부모<-손자

      <Provider value={content}>
        <Parent />
      </Provider>
    );
  }
}
export default GrandParent;
