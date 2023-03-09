/*
 * All the packages in node_modules are orchastrated by parcel.
 *
 * Transitive Dependencies: Package manager takes care of installing all the dependencies of the dependencies in our code.
 * ie. Parcel has its own dependencies.
 *
 * Hot Module Reloading (HMR): Parcel will automatically reload the page when you make changes to your code.
 *
 *  File Watching (C++): Parcel will watch your files for changes and rebuild them when they change.
 *
 * .parcel-cache: Parcel will cache your files in the .parcel-cache directory. Parcel needs some space in the project directory to cache files, but it will not cache files in the .parcel-cache directory.
 * dist folder: Parcel will output your files to the dist folder.
 *
 * Parcel bundles all of the code. It will bundle all of the code into a single file. It will bundle all of the code into a single file.
 * PARCEL IS A BEAST!
 * Parcel manages development server and production build. It's super fast.
 *
 * Parcel is zero configuration. It will automatically configure your project for you.
 *
 * Parcel does image optimization. It will optimize all of the images in your project.
 *
 * Parcel is compatible with older browsers. It will transpile your code to be compatible with older browsers.
 *
 * Can use HTTPS with Parcel.It will automatically generate a self-signed certificate for you. It is useful for testing your code and testing on mobile devices.
 */
import React from "react";
import ReactDOM from "react-dom/client";

//JSX is a HTML-like syntax, it is NOT HTML in JavaScript.
// JSX is a syntax extension to JavaScript. It is a way to write HTML in JavaScript.

// REACT ELEMENTS:
// This is your React Element. It is a plain object that describes what you want to see on the screen.
const heading = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

//COMPONENTS:
// React Component is a function that returns a React Element.
// Functional Component:
// - is a function that returns a React Element/JSX.

// - Function/Any Component - good practice to start with a capital letter (ie. HeaderComponent)

//single component
// If you are writing it in one line must have the semi colon at the end. If you are writing it in multiple lines then no need to have semi colon at the end.
const HeaderComponentOneLiner = () => {
  return <h1>Namaste React Functional Component</h1>;
};

//refactored HeaderComponent to arrow function.
//when you write more complex structure and code goes in multiple lines then wrap it in parenthesis ();
const HeaderComponentMultipleLiner = () => {
  return (
    <div>
      <h1>Namaste React Functional Component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// You can remove return to refactor the code.
const HeaderComponentBest = () => (
  <div>
    <h1>Namaste React Functional Component</h1>
    <h2>This is a h2 tag</h2>
  </div>
);

// Insert React Elelment in your Functional Component:
const HeaderComponent3 = () => {
  return (
    <div>
      {heading}
      <h1>Namaste React Functional Component 3</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// Using Functional Component then you no longer have a varible so Remember to capatalize the first letter of the component.
// to render use tag: root.render(<HeaderComponent />);
const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      {Title()}
      <h2>Namaste React Functional Component 😍😍😍</h2>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing react element to root
//async defer

// To render Functional Component:
root.render(<HeaderComponent />);

// To render JSX/React Element:
// root.render(heading);
