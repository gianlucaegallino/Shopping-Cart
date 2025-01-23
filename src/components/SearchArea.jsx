import s from "../styles/SearchArea.module.css";
export default function SearchArea() {
  return (
    <div className={s.searchArea}>
      <h2 className={s.title}>Shop </h2>
      <input className={s.input}
        placeholder="What are you looking for?"
      ></input>
    </div>
  );
}
