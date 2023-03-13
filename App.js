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

const Body = () => {
  return <h4>Body</h4>;
};

const Footer = () => {
  return <h4>Footer</h4>;
};

// const AppLayout = () => {
//   return (
//     <Header/>
//     <Body/>
//     <Footer/>

//   );
// };

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://imgs.search.brave.com/AhuyhPSZ1YUTp8_Pmag_PT73JbMQBCPF2dkZeCsmCQY/rs:fit:400:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/YjVaR0FMNFd2VTdW/Y3ZxMmN4YUdnQUFB/QSZwaWQ9QXBp"
    />
  </a>
);

const HeaderComponent = () => {
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

//INLINE STYLING IN REACT.
// how to input css to React.Fragment empty tags?
// by using style attribute and passing an object div style={{}}
const styleObj = {
  color: "red",
  backgroundColor: "blue",
  fontSize: "20px",
};

const App = () => (
  <div
    style={{
      color: "violet",
      backgroundColor: "greenyellow",
      fontSize: "20px",
    }}>
    <HeaderComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
