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

// Build the layout.
// Step 1. Create your AppLayout, list it out. 

const AppLayout = () => {
  return (
    { 
      /**
    Header
      - Logo
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

    }
  );

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