import { useState } from "react";
import { CartContext } from "./cartContext.js";
import { useContext } from "react";
import { ProductContext } from "./productContext.js";
import PropTypes from "prop-types";

//Cart data provider

export default function CartDataProvider({ children }) {
  //gets products from upper context
  const products = useContext(ProductContext);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id, amt) => {
    //check for invalid amount
    if (amt <= 0 || amt > 10) return;


    //Get the name and the price of the item.

    const pos = products.map((e) => e.id).indexOf(id);
    const prc = products[pos].price;
    const nm = products[pos].title;

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

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartDataProvider.propTypes = {
  children: PropTypes.object,
};
