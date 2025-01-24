import s from "../styles/CartMain.module.css";
import CartItemList from "./CartItemList";
export default function CartMain() {
  return (
    <div className={s.cartMain}>
      <h2 className={s.title}>Shopping Cart</h2>
      <CartItemList />
    </div>
  );
}
