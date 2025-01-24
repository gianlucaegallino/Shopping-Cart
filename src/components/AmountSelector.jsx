import s from "../styles/AmountSelector.module.css";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./cartContext";

export default function AmountSelector({ id }) {
  const [value, setValue] = useState(0);

  const { addToCart } = useContext(CartContext);

  function handleMore() {
    if (value < 10) {
      let newvalue = value + 1;
      setValue(newvalue);
    }
  }

  function handleLess() {
    if (value > 0) {
      let newvalue = value - 1;
      setValue(newvalue);
    }
  }

  function handleAdd() {
    addToCart(id, value);
    setValue(0);
  }

  return (
    <>
      <div className={s.amountSelector}>
        <button className={s.buttonleft} onClick={handleLess}>
          <Minus />
        </button>
        <input type="text" className={s.input} value={value} readOnly />
        <button className={s.buttonright} onClick={handleMore}>
          <Plus />
        </button>
      </div>
      <button className={s.addbutton} onClick={handleAdd}>
        Add
      </button>
    </>
  );
}
