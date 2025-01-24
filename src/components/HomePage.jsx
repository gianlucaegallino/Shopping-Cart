import s from "../styles/StorePage.module.css";
import Carousel from "./Carousel";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <div className={s.storePage}>
      <Hero />
      <Carousel amount={10} />
    </div>
  );
}
