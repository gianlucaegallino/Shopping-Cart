import s from "../styles/ShopSidebar.module.css";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";
export default function ShopSidebar() {
  return (
    <div className={s.sidebar}>
      <div className={s.container}>
        <h2 className={s.title}>Selected Items</h2>
        <ItemList
          items={[
            {
              name: "Green Pendant Necklace",
              amount: 1,
              price: 25.99,
              key: "gp",
            },
            {
              name: "Black Cotton T-Shirt",
              amount: 2,
              price: 15.49,
              key: "bc",
            },
            {
              name: "Gold Ring",
              amount: 1,
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

      <Link className={s.li} to="/cart">
        {" "}
        <button className={s.button}> Go to Cart</button>
      </Link>
    </div>
  );
}
