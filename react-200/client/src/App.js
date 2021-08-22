import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import Footer from "./routerComponent/Footer/Footer";
import Header from "./routerComponent/Header/Header admin";

import "./css/new.css";
import LoginForm from "./routerComponent/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* NOTE:오타 주의 Router 태그명 쓸 경우 error 발생 */}
        {/*  <Route exact path="/" component={ReactRouter} />
        <Route exact path="/reactRouter2" component={ReactRouter2} /> */}
        <Route exact path="/" component={LoginForm} />
        <Footer />
      </div>
    );
  }
}

export default App;
