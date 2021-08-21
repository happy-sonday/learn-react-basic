import axios from "axios";
import React, { Component } from "react";

class AxiousGet extends Component {
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
    });
  }

  render() {
    return <h1>axios get</h1>;
  }
}

export default AxiousGet;
