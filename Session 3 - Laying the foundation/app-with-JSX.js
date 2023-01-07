import React from "react";
import ReactDOM from "react-dom/client";

//This is react element
const ele1 = (
  <h1 id="ele1" key="ele1">
    Namaste React
  </h1>
);

const ele2 = (
  <h1 id="ele2" key="ele2">
    Namaste React
  </h1>
);

//React components - functional components and class based components

//This is a component(functional)
const HeaderComponent = () => {
  return (
    <div>
      {ele1}
      <h1>namaste react from functional component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

// This is also component (another way of writing)
const HeaderComponent2 = () => (
  <div>
    {/* <HeaderComponent/>
    {HeaderComponent()} */}
    {1 + 2}
    <h1>This is also a functional component</h1>
    <h2>This is also h2 tag</h2>
  </div>
);

/*
 *To use react element inside component --- add it inside curly braces {}
 *To use react component inside componet --- add it as a tag or call it using curly braces
 *
 * When you are using JSX -- add  curly braces and add any piece of JS code in it
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent2 />);
