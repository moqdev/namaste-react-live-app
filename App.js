import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// React Element Example A: (varible --> title must be lowercase)
const title = (
  <h1 id="title" key="h2">
    Food Villa
  </h1>
);

//Must use curly braces and title must be lowercase
const HeaderComponent = () => {
  return (
    <div>
      {title}
      <h2>Namaste React</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// Functional Component Example B: (varible --> Title must be capatalize)
// to render using tag: root.render(<HeaderComponent />);
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// 2 ways:
// 1.B: no curly braces, --> Title must be capatalize & <Title />> must be in < /tag> format
// 2.B: you can call Title as a function {Title()}
//Example 1.B: <Title />> must be in < /tag> format:
const HeaderComponent1 = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React Functional Component with Title Tag 🤪</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

//2.B: you can call Title as a function {Title()}
const HeaderComponent2 = () => {
  return (
    <div>
      {Title(console.log("Hello World"))}
      <h2>Namaste React Functional Component with Title function 🤪</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// WRITING COMMENTS INSIDE JSX?

const HeaderComponent3 = () => {
  return (
    <div>
      {
        // This is a comment.
        /**
         *
         *
         * This is a multi line comment.
         *
         */
      }
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent2 />);