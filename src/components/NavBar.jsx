import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./cartContext";
import style from "../styles/NavBar.module.css";

export default function NavBar() {
  const { cartItems } = useContext(CartContext);
  let amt =
    cartItems.length > 0 &&
    cartItems.map((item) => item.amount).reduce((a, b) => a + b, 0);

  return (
    <div className={style.navBar}>
      <h1 className={style.title}>
        <Link className={style.link} to="/">
          vixed
        </Link>
      </h1>

      <div className={style.buttons}>
        <p className={style.link}>
          <Link className={style.link} to="/">
            Home
          </Link>
        </p>
        <p className={style.link}>
          <Link className={style.link} to="/shop">
            Shop
          </Link>
        </p>

        <Link className={style.link} to="/cart">
          {" "}
          <ShoppingCart color="black" size={28} />
          <p className={style.number} data-testid="number">{amt}</p>
        </Link>
      </div>
    </div>
  );
}
