import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

import style from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <div className={style.navBar}>
      <h1 className={style.title}><Link className={style.link} to="/">vixed</Link></h1>

      <div className={style.buttons}>
        <p className={style.link}>
          <Link className={style.link} to="/">Home</Link>
        </p>
        <p className={style.link}>
          <Link className={style.link} to="/shop">Shop</Link>
        </p>

        <Link to="/cart">
          {" "}
          <ShoppingCart color="black" size={28} />
        </Link>
      </div>
    </div>
  );
}
