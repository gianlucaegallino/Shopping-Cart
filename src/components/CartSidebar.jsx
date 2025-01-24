import s from "../styles/CartSidebar.module.css";
import OrderSummary from "./OrderSummary";
import { Link } from "react-router-dom";

export default function CartSidebar() {
  return (
    <div className={s.sidebar}>
      <div className={s.container}>
        <h2 className={s.title}>Order Summary</h2>
        <OrderSummary
          items={[
            {
              name: "Green Pendant Necklace",
              amount: 1,
              price: 25.99,
              key: "gp",
            },
            {
              name: "Black Cotton T-Shirt",
              amount: 3,
              price: 15.49,
              key: "bc",
            },
            {
              name: "Gold Ring",
              amount: 5,
              price: 45.0,
              key: "gr",
            },
            {
              name: "Nature Print Hoodie",
              amount: 1,
              price: 35.99,
              key: "np",
            },
          ]}
        />
      </div>

      {/* TODO: add wipe after all this happens */}
      <Link className={s.li} to="/">
        {" "}
        <button className={s.button}> Checkout</button>
      </Link>
    </div>
  );
}
