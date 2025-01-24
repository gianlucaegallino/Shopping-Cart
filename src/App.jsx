import "./styles/normalize.css";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App({children}) {
  const [cartItems, setCartItems] = useState([])
  return (
    <>
      <NavBar items={cartItems} />
      {children}

      <Footer />
    </>
  );
}
