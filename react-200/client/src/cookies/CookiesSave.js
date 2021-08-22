import React, { Component } from "react";
import cookie from "react-cookies";

class CookiesSave extends Component {
  componentDidMount() {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save("userid", "react200", { path: "/", expires });
  }

  render() {
    return (
      <div>
        <h3>react-cookies Save</h3>
      </div>
    );
  }
}

export default CookiesSave;
