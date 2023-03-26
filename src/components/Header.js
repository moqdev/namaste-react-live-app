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
    <>
      <div className="header">
        <Title />
        <div className="icons">
          <i className="fas fa-bars" id="menu-bars"></i>
          <i className="fas fa-search" id="search-icon"></i>
          <i className="fas fa-user" id="user-icon"></i>
          <i className="fas fa-shopping-cart" id="cart-icon"></i>
          {/* <a href="#" class="fas fa-shopping cart"></a> */}
          <div className="nav-items">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Cart</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
