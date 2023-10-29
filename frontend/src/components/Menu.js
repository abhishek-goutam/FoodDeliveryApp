import React, { useEffect, useState } from "react";
import axios from "axios";
// Define your CSS styles as an object
const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", // Center align the cards horizontally
  },
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    minWidth: "300px", // Set a minimum width for each card
    textAlign: "center",
  },
  item: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    width: "200px",
    height: "100px",
    marginBottom: "10px",
  },
};

const Menu = () => {
  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("food-delivery-app-dusky.vercel.app/api/dishes").then((response) => {
      console.log("response",response.data);
      setProducts(response.data);
    });
  }, []);
  const addToCart = () => {
    setCounter(counter + 1);
    // itemsArray.push(item);
    // localStorage.setItem("items", JSON.stringify(itemsArray));
    console.log("I clicked increment button and count2 got incremented");
  };
  const itemsArray = JSON.parse(localStorage.getItem("items"))
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  console.log("eeeeeeeeeeeeeeeeeeeee", itemsArray);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  const handleClickDecrement = () => {
    setCounter(counter - 1);
    console.log("I clicked decrement button and count got decremented");
  };
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", color: "green" }}>Menu</h1>
      </div>
      <div style={styles.cardContainer}>
        {products.map((item, index) => (
          <div style={styles.card} key={item.id}>
            <div style={styles.item}>
              <div key={index}>
                <img style={styles.img} src={item.imgSrc} alt={item.name} />
              </div>
              <div>
                <h3>{item.name} </h3>
              </div>
              <div>
                <h3 style={{ color: "red" }}>${item.price}</h3>
              </div>
            </div>
            <button type="button" onClick={handleClickDecrement}>
              -
            </button>
            {counter}
            <button type="button" onClick={addToCart}>
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
