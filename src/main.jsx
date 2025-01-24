import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ProductDataProvider from "./components/ProductDataProvider.jsx";
import HomePage from "./components/HomePage.jsx";
import ShopPage from "./components/ShopPage.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import CartDataProvider from "./components/CartDataProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <HomePage />
      </App>
    ),
  },
  {
    path: "shop",
    element: (
      <App>
        <ShopPage />
      </App>
    ),
  },
  {
    path: "cart",
    element: (
      <App>
        <ShoppingCart />
      </App>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductDataProvider>
      <CartDataProvider>
        <RouterProvider router={router} />
      </CartDataProvider>
    </ProductDataProvider>
  </StrictMode>
);
