import PropTypes from "prop-types";
import s from "../styles/CoolCard.module.css";
export default function CoolCard({
  imageUrl = "",
  prodName = "productName",
  price = 0,
}) {
  return (
    <div className={s.coolCard}>
      <img src={imageUrl} alt={prodName}/>
      <div className={s.line}>
        <div className={s.namediv}>
          <p className={s.name}>{prodName}</p>
        </div>
        <p>{"$" + price}</p>
      </div>
    </div>
  );
}

CoolCard.propTypes = {
  imageUrl: PropTypes.string,
  prodName: PropTypes.string,
  price: PropTypes.number,
};
