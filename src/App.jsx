import "./styles/normalize.css";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App({children}) {
  return (
    <>
      <NavBar />
      {children}

      <Footer />
    </>
  );
}
