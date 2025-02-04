import s from "../styles/OrderSummary.module.css";
import PropTypes from "prop-types";

function getSum(total, num) {
  return total + num;
}

export default function OrderSummary({ items = [] }) {
  let display = <p data-testid="fb" className={s.fallback}>There is nothing here yet.</p>;
  let total = 0;
  let totalWithTaxes = 0;
  let taxes = 0;

  if (items.length > 0) {
    let prices = items.map((item) => item.price * item.amount);
    let quantities = items.map((item) => item.amount);

    total = prices.reduce(getSum, 0);
    taxes = total * 0.21;
    totalWithTaxes = total + taxes;

    let finalQuant = quantities.reduce(getSum, 0);

    display = (
      <>
        <p className={s.summaryItem}>
          Item Quantity: <b data-testid="qt">{finalQuant}</b>
        </p>
        <p className={s.summaryItem}>
          Order price: <b data-testid="total">{"$" + total.toFixed(2)}</b>
        </p>
        <p className={s.summaryItem}>
          Tax (21%): <b data-testid="tax">{"$" + taxes.toFixed(2)}</b>
        </p>
        <p className={s.summaryItem}>
          Total after taxes: <b data-testid="total+tax">{"$" + totalWithTaxes.toFixed(2)}</b>
        </p>
      </>
    );
  }
  return <div className={s.list}>{display}</div>;
}

OrderSummary.propTypes = {
  items: PropTypes.array,
};
