import React from "react";
import ReactDOM from "react-dom/client";

// React Element
//const heading = React.createElement("h1", { id: "heading" }, "Namaste 🐻‍❄️");

//JSX (React Element)
const jsxHeading = <h1 id="heading"> Namaste 🐼🐯</h1>;
const jsHeading = (
  <h1 className="head" tabIndex="5">
    Namaste ❤️
  </h1>
);
// Functional Component
const r = <span>Right</span>
const Title = () => {
  return <h1>Hello😍</h1>;
};
const number =1000;
const table = <h1>
{r}
Hi</h1>;
const HeadingComponent = () => (
  <div id="container">
    <Title />
    {table}
    {number}
    {100+200}
    <h1>Namaste😸</h1>
  </div>
);
// or
const HeadingComponent1 = () => {<h1 className="heading">Namaste</h1>};
//or
const HeadingComponent2 = () => <h1 className="heading">Namaste</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

