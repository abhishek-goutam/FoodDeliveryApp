import React ,{useState, useEffect}from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  background: "#333", // Background color for the header
  color: "white", // Text color
};

const logoStyle = {
  fontSize: "36px",
};

const navLinkStyle = {
  textDecoration: "none",
  color: "white",
  margin: "0 10px",
};

const activeStyle = {
  fontWeight: "bold",
  color: "#007BFF",
};
const cartHeaderStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "1.5rem",
  color: "red",
};

const cartIconStyle = {
  marginRight: "10px",
  fontSize: "1.8rem",
};

function Header() {
  const [cart, setCart] = useState([]);
  //this is called on component mount
  useEffect(() => {
    let localCart = localStorage.getItem("cart");
    if (localCart) localCart = JSON.parse(localCart);
    if (localCart) setCart(localCart);
  }, [cart]); 
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={headerStyle} className="header">
      <NavLink exact to='/home'>
      <h1 style={logoStyle}>Port Belly</h1>
      </NavLink>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to="/home" style={navLinkStyle} activeStyle={activeStyle}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" style={navLinkStyle} activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" style={navLinkStyle} activeStyle={activeStyle}>
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/menu" style={navLinkStyle} activeStyle={activeStyle}>
              Menu
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/cart" style={navLinkStyle} activeStyle={activeStyle}>
      <div style={cartHeaderStyle}>
        <ShoppingCartIcon style={cartIconStyle}/>
        Your Cart ({totalItemsInCart})
      </div>
      </NavLink>
    </div>
  );
}

export default Header;
