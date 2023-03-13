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
  return (
    <h4>Body</h4>
  );
};

const Footer = () => {
  return (
    <h4>Footer</h4>
  );
};


const AppLayout = () => {
  return (
    <Header/>
    <Body/>
    <Footer/>

  );
};

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

// Important to know about JSX: 
// JSX can only have one parent element.
// If you want to have multiple elements, you can wrap them in a div or use React.Fragment
// Better to use React.Fragment because it doesn't add extra divs to the DOM.
// React.Fragment is coming from React library (import React from "react";).
// React.Fragment is like an EMPTY TAG. 
// React.Fragment is a component, it doesn't render anything. It's used to wrap multiple components. 
// It's used to avoid adding extra divs to the DOM!
const App = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

// But we can also use <> </> instead of React.Fragment - looks cleaner.
const App = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
