import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// APP LAYOUT
/**
    Header
      - Title/Logo
      - Nav Items (Right Side)
      - Cart
    Body 
     - Search Bar
      - List of Restaurants
       - Restaurant Card
        - Image
        - Name
        - Rating
        - Price
        - Cusines
    Footer
     - links
     - copyrights
  */

// Step 1. Create your AppLayout, list it out.
const AppLayout = () => {
  return {};
};

// Step 2. Build the Header and Header Components.
// What are the components in the Header? Title/Logo, NavItems, Cart..
// Step 2.a. Create the Title Component.
// Step 2.b. Create the NavItems Component.

const Title = () => (
  <h1 id="title" key="h2">
    HANGRY
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
