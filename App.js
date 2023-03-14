import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// APP LAYOUT
/**
    Header
      - Title(Logo)
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

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://imgs.search.brave.com/AhuyhPSZ1YUTp8_Pmag_PT73JbMQBCPF2dkZeCsmCQY/rs:fit:400:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/YjVaR0FMNFd2VTdW/Y3ZxMmN4YUdnQUFB/QSZwaWQ9QXBp"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
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

//Make RestaurantCard dynamic
const burgerKing = {
  name: "Burger King",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fkddokqc2zyrzphr7aup",
  cusines: ["Burgers", "American"],
  rating: 4.2,
  price: 200,
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={burgerKing.image}></img>
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cusines.join(", ")}</h3>
      <h4>{burgerKing.rating}</h4>
      <button>Add to Cart</button>
    </div>
  );
};

// //Build RestuarantCard using hard data now and integrating API later
// const RestaurantCard = () => {
//   return (
//     <div className="card">
//       <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fkddokqc2zyrzphr7aup"></img>
//       <h2>Burger King</h2>
//       <h3>Burgers, American</h3>
//       <h4>4.2 </h4>
//     </div>
//   );
// };

// WHAT IS CONFIG DRIVEN UI?
// Config Driven UI is a good practice. It allows us to change the number of cards easily, without changing the code, just the config.
// Config Driven UI allows us to control our frontend by our backend.
// Backend can send the config to the frontend and the frontend can render the UI.
// The backend and API is driving the config and the frontend is rendering the UI based on the config.

const Body = () => {
  return (
    <div class="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
