import s from "../styles/ShopSidebar.module.css";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./cartContext";

export default function ShopSidebar() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={s.sidebar}>
      <div className={s.container}>
        <h2 className={s.title}>Selected Items</h2>
        <ItemList items={cartItems} />
      </div>

      <Link className={s.li} to="/cart">
        {" "}
        <button className={s.button}> Go to Cart</button>
      </Link>
    </div>
  );
}
