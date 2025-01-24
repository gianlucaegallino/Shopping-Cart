import { useState } from "react";
import { CartContext } from "./cartContext.js";
import { useContext } from "react";
import { ProductContext } from "./productContext.js";

//Cart data provider

//TODO: Add props
//TODO: Add validations, status, etc.

export default function CartDataProvider({ children }) {
  //gets products from upper context
  const products = useContext(ProductContext);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id, amt) => {
    //Get the name and the price of the item.

    const pos = products.map((e) => e.id).indexOf(id);
    const prc = products[pos].price;
    const nm = products[pos].title;
    console.log(products[pos]);

    //check if the item is present in the cart

    const cartIndex = cartItems.map((i) => i.id).indexOf(id);

    if (cartIndex >= 0) {
      //if present, add the amount to the item
      let newItems = [...cartItems];

      //safety check: no more than 10 units per item
      let newamount = newItems[cartIndex].amount + amt;
      if (newamount > 10) {
        newItems[cartIndex].amount = 10;
      } else {
        newItems[cartIndex].amount = newamount;
      }

      //sets new cart
      setCartItems(newItems);
    } else {
      //if not present, add the item and amount
      setCartItems((cartItems) => [
        ...cartItems,
        { name: nm, amount: amt, price: prc, id: id },
      ]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  //TODO: Implement decrease and increase
  const increase = () => {};
  const decrease = () => {};

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
