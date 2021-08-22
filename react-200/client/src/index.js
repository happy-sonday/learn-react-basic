import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
const store = createStore(reducers);

const listener = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App indexProp="react" />
    </Provider>,
    document.getElementById("root")
  );
};

store.subscribe(listener);
listener();
// ReactDOM.render(
//   <App />,

//   document.getElementById("root")
// );
