import React, { Component } from "react";

class R059_FetchGet extends Component {
  componentDidMount = async () => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const body = await response.json();
    console.log(body);
  };

  render() {
    return <h1>fetch get</h1>;
  }
}

export default R059_FetchGet;
