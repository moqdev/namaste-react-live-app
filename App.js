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
    <section className="showcase">
      <div className="header">
        <Title />
        <div className="toggle"></div>
      </div>
      <div className="overlay"></div>
      <div className="text">
        <h2>Cure Your Hunger </h2>
        <h3>
          All Your Favorite Restaurants and more, delivered right at your door
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod.{" "}
        </p>
        <a href="#">Enter Delivery Address</a>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About US</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
      <ul className="social">
        <li>
          <a href="#">
            <img src="https://i.ibb.co/x7P24fL/facebook.png"></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://i.ibb.co/Wnxq2Nq/twitter.png"></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://i.ibb.co/ySwtH4B/instagram.png"></img>
          </a>
        </li>
      </ul>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
