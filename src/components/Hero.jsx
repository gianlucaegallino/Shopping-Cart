import s from "../styles/Hero.module.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className={s.heroSection}>
      <div className={s.heroElements}>
        <h2>Embrace Nature, Wear Elegance.</h2>
        <h3>
          Discover timeless clothing and jewelry inspired by the beauty of the
          natural world. Unleash your style with pieces that connect
          sophistication and nature.
        </h3>
        <Link className={s.li} to="/shop">
          <button className={s.button}>Shop the Collection</button>
        </Link>
      </div>
    </div>
  );
}
