import React from "react";
import CookieSave from "./cookies/CookiesSave";
import GetCookieInfo from "./cookies/GetCookieInfo";
import RemoveCookieInfo from "./cookies/RemoveCookie";

function App() {
  return (
    <div>
      <CookieSave />
      <GetCookieInfo />
      <RemoveCookieInfo />
    </div>
  );
}

export default App;
