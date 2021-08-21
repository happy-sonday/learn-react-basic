import React, { Component } from "react";

class Reject extends Component {
  componentDidMount() {
    new Promise((resolve, reject) => {
      reject(Error("Error generate"));
    })
      .then((res) => console.log(res))
      .catch((result) => console.log(`Catch ${result}`));
  }

  render() {
    return <div>Reject generate</div>;
  }
}

export default Reject;
