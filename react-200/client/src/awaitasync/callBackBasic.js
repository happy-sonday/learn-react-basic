import React, { Component } from "react";

class CallBackBasic extends Component {
  componentDidMount() {
    this.logPrint(1, (returnedParam) => {
      console.log(`retrunedParam : ${returnedParam}`);
      this.logPrint(returnedParam, (returnedParam2) => {
        console.log(`returnedParam2: ${returnedParam2}`);
      });
    });
  }
  logPrint(param, anomCallBackFunc) {
    console.log(`logPrint Param: ${param}`);
    param = param;
    anomCallBackFunc(param);
  }

  render() {
    return <div>CallBackBasic Function</div>;
  }
}

export default CallBackBasic;
