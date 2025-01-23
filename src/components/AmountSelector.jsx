import s from "../styles/AmountSelector.module.css";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function AmountSelector() {
  const [value, setValue] = useState(0);

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

  function handleAdd(){
    setValue(0);
  }

  return (
    <>
        <div className={s.amountSelector}>
          {" "}
          <button className={s.buttonleft} onClick={handleLess}>
            <Minus />
          </button>
          <input type="text" className={s.input} value={value} />
          <button className={s.buttonright} onClick={handleMore}>
            <Plus />
          </button>
        </div>
        <button className={s.addbutton} onClick={handleAdd}>Add</button>
    </>
  );
}
