import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ProductDataProvider from "./components/ProductDataProvider.jsx";

createRoot(document.getElementById("root")).render(
    <ProductDataProvider>
      <App />
    </ProductDataProvider>
);
//TODO: Devolver el coso.