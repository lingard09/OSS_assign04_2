import React from "react";
import ReactDOM from "react-dom/client";

const myFirstElement = (
  <div>
    <h1>Hello React!</h1>
    <p>it's too hard to me...</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(myFirstElement);
