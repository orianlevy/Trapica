//Libs
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

//Routes
import App from './App'
import store from "./store"

//Style
import Style from "./Style.css"; 

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);