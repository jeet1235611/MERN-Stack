"use strict";

//import { listenerCount } from "cluster";

console.log("app.js is running!");

//JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    " This is some info "
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item 1"
    ),
    React.createElement(
      "li",
      null,
      "Item 2"
    )
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
