import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import Footer from "./routerComponent/Footer/Footer";
import Header from "./routerComponent/Header/Header admin";

import "./css/new.css";
import LoginForm from "./routerComponent/LoginForm";
import reactDebounce from "./lodash/reactDebounce";
import ThrottleLoadash from "./lodash/throttle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/debounce" component={reactDebounce} />
        <Route exact path="/throttle" component={ThrottleLoadash} />

        <Footer />
      </div>
    );
  }
}

export default App;
