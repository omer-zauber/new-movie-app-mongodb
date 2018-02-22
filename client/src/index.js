//import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
//import $ from 'jquery';

import App from "./components/App";
import reducers from "./reducers";

// $(document).ready(function(){
//   $('select').formSelect();
// });

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
store.subscribe(() => {
  console.log(store);
});

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
