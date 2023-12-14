import React from "react";
import ReactDOM from "react-dom/client";
/* Heading Using React */
const heading = React.createElement(
  "hi",
  { id: "heading", xyz: "abc" },
  "Hello World"
);
/*Nested Structure

<div id="parent">
<div id="child">
<h1>I am child 1</h1>
<h2>I am child 2</h2>
</div>
</div>
*/

/* Nested parent -child relationship using ',' */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello I am h1"),
    React.createElement("h1", {}, "Hello I am h2")
  )
);
/* Nested parent -child relationship using [] */
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am 1st child"),
    React.createElement("h1", {}, "I am 2nd child"),
  ])
);
/* Nested 2nd Structure
<div id="parent">
<div id="child">
<h1>I am child 1</h1>
<h2>I am child 2</h2>
</div>
<div id="child2">
<h1>I am child 1</h1>
<h2>I am child 2</h2>
</div>
</div>
*/
const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi I am C1"),
    React.createElement("h1", {}, " I am C2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi I am C3"),
    React.createElement("h1", {}, " I am C4"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);
