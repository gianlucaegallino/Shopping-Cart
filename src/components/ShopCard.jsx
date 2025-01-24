import PropTypes from "prop-types";
import s from "../styles/ShopCard.module.css";
import AmountSelector from "./AmountSelector";

export default function ShopCard({
  imageUrl = "",
  prodName = "productName",
  price = 0,
  id = 0,
}) {
  return (
    <div className={s.shopCard} key={id}>
      <img className={s.img} src={imageUrl} alt={prodName} />
      <div className={s.info}>
        <div className={s.line}>
          <div className={s.namediv}>
            <p className={s.name}>{prodName}</p>
          </div>
          <p className={s.item}>{"$" + price}</p>
        </div>
        <div className={s.line}>
          <AmountSelector id={id} />
        </div>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  imageUrl: PropTypes.string,
  prodName: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
};
