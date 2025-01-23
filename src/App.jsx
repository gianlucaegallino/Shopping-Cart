import "./styles/normalize.css"
import "./styles/App.css";
import NavBar from "./components/NavBar"; 
import StorePage from "./components/StorePage"
import Footer from "./components/Footer"
export default function App() {
  return (
    <>
      <NavBar/>
      <StorePage/>
      <Footer />
    </>
  );
}
