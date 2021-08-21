import axios from "axios";
import React, { Component } from "react";

class AxiousPost extends Component {
  componentDidMount() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "넥스트레블",
        body: "무질서한 광야의 여전사들을 노래",
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  render() {
    return <h1>axios Post</h1>;
  }
}

export default AxiousPost;
