import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class ReactRouter extends Component {
  render() {
    return (
      <div>
        <h1>path="/"</h1>
        <h3>reactRouterComponent</h3>
        <Link to={"/reactRouter2"}>reactRouter2</Link>
      </div>
    );
  }
}

export default ReactRouter;
