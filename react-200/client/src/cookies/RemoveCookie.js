import React, { Component } from "react";
import cookie from "react-cookies";

class RemoveCookieInfo extends Component {
  componentDidMount() {
    setTimeout(() => {
      cookie.remove("secondUserId", { path: "/" });
      console.log("쿠키 삭제 실행");
    }, 1000);
    setTimeout(() => {
      alert(cookie.load("secondUserId"));
    }, 5000);
  }

  render() {
    return (
      <div>
        <h3>react-cookies remove</h3>
      </div>
    );
  }
}

export default RemoveCookieInfo;
