import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";


// // React Element Example C: Third Way
const Title = () => (
  <h1 id="title" key="h2">
    Food Villa App
  </h1>
);

// Example C: You can use it just like an opening and closing tag
const HeaderComponentC = () => {
  return (
    <div>
      <Title></Title>
      <h2>Namaste React - Third Example</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// Most commonly used Santax:
// Is the self closing tag syntax --> <Title />
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React - Most commonly Used Syntax</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);