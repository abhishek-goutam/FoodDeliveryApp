import React from "react";
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

const AddToCart = () => {
  const addedItem = JSON.parse(localStorage.getItem("items"))
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  const addToCart = (item) => {
    addedItem.push(item);
    console.log("CART", addedItem);
  };
  return (
    <div>
      <h1 style={{ color: "green", textAlign: "center" }}>Cart</h1>
      {addedItem.map((item, index) => (
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
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;

// function AddToCart() {

// const cartData = JSON.parse(localStorage.getItem('item'))
// const addToCart = (item) => {
//   cartData.push(item);
//   console.log('CART',cartData)
// };

//     return (
//       <div>
//         <h1>Add Items to Cart</h1>
//         <div>
//           <h2>Cart Contents:</h2>
//           <ul>
//             {cartData.map((item, index) => (
//              <div className='card' key={item.id}>
//              <div className='item'>
//                  <div>
//                      <img className="img" src={item.imgSrc} alt={item.name} />
//                  </div>
//                  <div>
//                      <h3>{item.name}</h3>
//                  </div>
//                  <div>
//                      <h3>{item.price}</h3>
//                  </div>
//              </div>
//              <button onClick={() => addToCart(item)}>Add to Cart</button>

//              {/* <button className='button' onClick={routeChange} >Add to cart</button> /} */}
//              </div>

//             ))}
//           </ul>
//         </div>

//         {/* {/ Example of adding items to the cart */}
//       </div>
//     );
//   }

//   export default AddToCart;
