import React from "react";
import ReactDOM from "react-dom/client";

//heading 1 and heading 2 and container are React elements => Object => HTML(DOM)
const heading1 = React.createElement("h1", {}, "Heading 1 from React!");
const heading2 = React.createElement("h2", {}, "Heading 2 from React!");
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

console.log(heading1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
