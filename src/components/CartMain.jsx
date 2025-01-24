import s from "../styles/CartMain.module.css"
import CartItemList from "./CartItemList";
export default function CartMain() {
  return <div className={s.cartMain}>
    <h2 className={s.title}>Shopping Cart</h2>
    <CartItemList
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
  </div>;
}
