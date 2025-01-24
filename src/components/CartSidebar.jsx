import s from "../styles/CartSidebar.module.css";
import OrderSummary from "./OrderSummary";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./cartContext";

export default function CartSidebar() {
  const { cartItems, clearCart } = useContext(CartContext);

  return (
    <div className={s.sidebar}>
      <div className={s.container}>
        <h2 className={s.title}>Order Summary</h2>
        <OrderSummary items={cartItems} />
      </div>

      <Link className={s.li} to="/">
        {" "}
        <button className={s.button} onClick={clearCart}>
          {" "}
          Checkout
        </button>
      </Link>
    </div>
  );
}
