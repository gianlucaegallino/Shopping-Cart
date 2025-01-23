import { useContext } from "react";
import { ProductContext } from "./productContext.js";
import PropTypes from "prop-types";
import ShopCard from "./ShopCard.jsx";
import s from "../styles/ProductArea.module.css";


export default function ProductArea() {

  //gets products from upper context
  const products = useContext(ProductContext);

    //renders all products 
    //TODO: Search support 

  let render = products.map((p) => {
    return (
      <ShopCard
        key={p.id}
        prodName={p.title}
        imageUrl={p.image}
        price={p.price}
      />
    );
  });

  return (
    <div>
      <div className={s.productArea}>{render}</div>
    </div>
  );
}

ProductArea.propTypes = {
  amount: PropTypes.number,
};
