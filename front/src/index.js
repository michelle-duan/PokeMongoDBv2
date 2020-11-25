/*
I think the button and font style can be styled more so that the content of the website match with the style more. And more instructions once you log in can be helpful!
*/
import React from "react";
import ReactDOM from "react-dom";
import "./components/styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
