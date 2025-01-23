import s from "../styles/ShoppingCart.module.css";
import CartMain from "./CartMain";
import CartSidebar from "./CartSidebar"

export default function HomePage() {
  return (
    <div className={s.shoppingCart}>
      <CartMain />
      <CartSidebar />
    </div>
  );
}
