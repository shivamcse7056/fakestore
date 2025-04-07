// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <h2 className="cart-empty">🛒 Your cart is empty.</h2>;
  }

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="cart-details">
            <h4>{item.title}</h4>
            <p>${item.price.toFixed(2)}</p>
            <div className="quantity-control">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
          </div>
        </div>
      ))}
      <h3 className="total">Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
