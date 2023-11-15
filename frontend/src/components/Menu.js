import React, { useEffect, useState } from "react";
import axios from "axios";
import background from '../images/rest3.jpg'

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundSize: "cover", // Ensure the image covers the container
  backgroundRepeat: "no-repeat", // Prevent image repetition
  backgroundImage: `url(${background})`,
  
};

const headerStyle = {
  fontSize: "2.5rem",
  marginBottom: "1rem",
  fontFamily: "cursive",
  color: "#4CAF50", // Green color
  textAlign: "center",
};

const cardContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  margin: "20px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  minWidth: "300px",
  textAlign: "center",
  background: "white",
};

const itemStyle = {
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const imgStyle = {
  width: "100%",
  height: "150px",
  marginBottom: "10px",
};

const priceStyle = {
  fontSize: "1.5rem",
  color: "red",
  marginBottom: "2px",
};

const addButtonStyle = {
  padding: "10px 20px",
  fontSize: "1.2rem",
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
};

function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://food-delivery-app-dusky.vercel.app/api/dishes")
      .then((response) => {
        setProducts(response.data);
      });
  }, [products]);

  const addItem = (item) => {
    let existingCart = [];
    if (
      localStorage.getItem("cart") &&
      JSON.parse(localStorage.getItem("cart"))
    ) {
      existingCart = JSON.parse(localStorage.getItem("cart"));
    }
    let cartCopy = [...existingCart];
    let itemCopy = { ...item };
    let { id } = itemCopy;
    let existingItem = cartCopy.find((cartItem) => cartItem.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      itemCopy.quantity = 1;
      cartCopy.push(itemCopy);
    }

    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  const handleAddFood = (item) => {
    addItem(item);
  };

  return (
    <div style={containerStyle} >
      <div>
        <h1 style={headerStyle}>Menu</h1>
      </div>
      <div style={cardContainerStyle}>
        {products.map((item) => (
          <div style={cardStyle} key={item.id}>
            <div style={itemStyle}>
              <img style={imgStyle} src={item.imgsrc} alt={item.name} />
              <h3>{item.name}</h3>
              <h3 style={priceStyle}>Rs.{item.price}</h3>
            </div>
            <button style={addButtonStyle} onClick={() => handleAddFood(item)}>
              Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
