import s from "../styles/CartItemList.module.css";
import { useContext } from "react";
import { CartContext } from "./cartContext";
import { X } from "lucide-react";

export default function ItemList() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  let display = <p className={s.fallback}> There is nothing here yet.</p>;

  if (cartItems.length > 0) {
    display = cartItems.map((item) => {
      return (
        <div className={s.item} key={item.id}>
          <p className={s.itemtext}>{item.name}</p>

          <p className={s.itemtext}>{"Qty: " + item.amount}</p>
          <p className={s.itemtext}>{"Total: $" + (item.price * item.amount).toFixed(2)}</p>
          <button className={s.button} onClick={()=>removeFromCart(item.id)}><X /></button>

        </div>
      );
    });
  }


  return <div className={s.list}>{display}</div>;
}
