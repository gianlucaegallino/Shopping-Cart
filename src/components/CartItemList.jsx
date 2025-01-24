import s from "../styles/CartItemList.module.css";

export default function ItemList({ items = [] }) {
  let display = <p className={s.fallback}> There is nothing here yet.</p>;

  if (items.length > 0) {
    display = items.map((item) => {
      return (
        <div className={s.item} key={item.key}>
          <p className={s.itemtext}>{item.name}</p>
          <p className={s.itemtext}>{item.amount}</p>
        </div>
      );
    });
  }

  return <div className={s.list}>{display}</div>;
}
