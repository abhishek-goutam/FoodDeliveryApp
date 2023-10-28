import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const navLinkStyle = {
  marginRight: "10px",
  textDecoration: "none", // Remove the underline
  color: "white", // Change this color to your desired link color
};

const activeStyle = {
  fontWeight: "bold",
  color: "#007BFF", // Change this color to your desired active link color
  textDecoration: "none", // Remove the underline for active link
};
function Header() {
  return (
    <div className="header">
      <h1 style={{ textAlign: "left", fontSize: "50px" }}>Food Delivery App</h1>
      <NavLink
        to="/cart"
        style={{
          marginRight: "10px",
          textDecoration: "none",
          color: "white",
          float: "right",
          // fontSize:'larger',
        }}
        activeStyle={activeStyle}
      >
        <ShoppingCartIcon />
      </NavLink>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              exact
              to="/home"
              style={navLinkStyle}
              activeStyle={activeStyle}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" style={navLinkStyle} activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              style={navLinkStyle}
              activeStyle={activeStyle}
            >
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
    </div>
  );
}

export default Header;
