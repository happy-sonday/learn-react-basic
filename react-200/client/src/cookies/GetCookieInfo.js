import React, { Component } from "react";
import cookie from "react-cookies";

class GetCookieInfo extends Component {
  componentDidMount() {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60);
    cookie.save("secondUserId", "두번째유저의 정보", {
      path: "/",
      expires,
    });

    setTimeout(() => {
      alert(cookie.load("secondUserId"));
    }, 1000);
  }

  render() {
    return (
      <div>
        <h3>react-cookies load</h3>
      </div>
    );
  }
}

export default GetCookieInfo;
