import React from 'react';
import Cart from './Cart';

const Checkout = ({ cart, checkout }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <Cart cart={cart} />
      <p>Total: ${total}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Checkout;
