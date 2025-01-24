import s from "../styles/CartItemList.module.css";
import { useContext } from "react";
import { CartContext } from "./cartContext";

export default function ItemList() {
  const { cartItems } = useContext(CartContext);

  let display = <p className={s.fallback}> There is nothing here yet.</p>;

  if (cartItems.length > 0) {
    display = cartItems.map((item) => {
      return (
        <div className={s.item} key={item.key}>
          <p className={s.itemtext}>{item.name}</p>
          <p className={s.itemtext}>{item.amount}</p>
        </div>
      );
    });
  }

  return <div className={s.list}>{display}</div>;
}
