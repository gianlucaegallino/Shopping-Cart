import PropTypes from "prop-types";
import { useContext } from "react";
import CoolCard from "./CoolCard.jsx";
import s from "../styles/Carousel.module.css";
import { ProductContext } from "./productContext.js";

export default function Carousel({ amount = 6 }) {
  //gets products from upper context
  const products = useContext(ProductContext);

  //grabs products arbitrarily to display based on amount
  let prods;

  if (amount < products.length && amount != 0) {
    prods = products.slice(0, amount);
  } else return <></>;

  let render = prods.map((p) => {
    return (
      <CoolCard
        key={p.id}
        prodName={p.title}
        imageUrl={p.image}
        price={p.price}
      />
    );
  });

  return (
    <div>
      <h3 className={s.header}>New Arrivals</h3>
      <div className={s.carousel}>{render}</div>
    </div>
  );
}

Carousel.propTypes = {
  amount: PropTypes.number,
};
