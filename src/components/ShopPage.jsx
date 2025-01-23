import s from "../styles/ShopPage.module.css";
import ProductArea from "./ProductArea";
import SearchArea from "./SearchArea";
import ShopSidebar from "./ShopSidebar";

export default function ShopPage() {
  return (
    <div className={s.shopPage}>
      <ShopSidebar />

      <SearchArea />
      <ProductArea />
    </div>
  );
}
