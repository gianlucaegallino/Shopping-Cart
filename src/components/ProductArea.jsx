import { useContext } from "react";
import { ProductContext } from "./productContext.js";
import ShopCard from "./ShopCard.jsx";
import s from "../styles/ProductArea.module.css";

export default function ProductArea() {
  //gets products from upper context
  const products = useContext(ProductContext);

  //renders all products

  let render = products.map((p) => {
    return (
      <ShopCard
        key={p.id}
        prodName={p.title}
        imageUrl={p.image}
        price={p.price}
        id={p.id}
      />
    );
  });

  return (
    <div>
      <div className={s.productArea}>{render}</div>
    </div>
  );
}
