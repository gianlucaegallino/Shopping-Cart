import s from "../styles/AmountSelector.module.css";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./cartContext";
import PropTypes from "prop-types";

export default function AmountSelector({ id }) {
  const [value, setValue] = useState(0);

  const { addToCart } = useContext(CartContext);

  function handleMore() {
    let newvalue = parseInt(value) + 1;
    if (newvalue <= 10) {
      setValue(newvalue);
    }
  }

  function handleLess() {
    let newvalue = parseInt(value) - 1;
    if (newvalue >= 0) {

      setValue(newvalue);
    }
  }

  function handleChange(e) {
    if (e.target.value > 0 && e.target.value <=10) setValue(parseInt(e.target.value))
    else if (e.target.value == "") setValue(0);
  }


  function handleAdd() {
    addToCart(id, parseInt(value));
    setValue(0);
  }

  return (
    <>
      <div className={s.amountSelector}>
        <button className={s.buttonleft} onClick={handleLess}>
          <Minus />
        </button>
        <input type="text" className={s.input} value={value} onChange={handleChange} />
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

AmountSelector.propTypes = {
  id: PropTypes.number,
};
