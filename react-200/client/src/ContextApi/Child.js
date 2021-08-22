import React from "react";
import { Consumer } from "./GrandParent";

class Child extends React.Component {
  render() {
    return (
      <Consumer>
        {/*  {(contextValue) => <h3>{`contextValue : ${contextValue}`}</h3>} */}
        {(contextValue) => (
          <button
            onClick={(e) => contextValue.setStateFunc("react200 from child")}
          >
            {contextValue.name}_button
          </button>
        )}
      </Consumer>
    );
  }
}
export default Child;
