import { useState } from "react";
import { CartContext } from "./cartContext.js";
import { clear } from "@testing-library/user-event/dist/cjs/utility/clear.js";

//Cart data provider

//TODO: Add props
//TODO: Add validations, status, etc.

export default function CartDataProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    {
      name: "Green Pendant Necklace",
      amount: 1,
      price: 25.99,
      key: "gp",
    },
    {
      name: "Black Cotton T-Shirt",
      amount: 2,
      price: 15.49,
      key: "bc",
    },
    {
      name: "Gold Ring",
      amount: 1,
      price: 45.0,
      key: "gr",
    },
    {
      name: "Nature Print Hoodie",
      amount: 1,
      price: 35.99,
      key: "np",
    },
  ]);

  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
