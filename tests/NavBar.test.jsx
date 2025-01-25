import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartContext } from "../src/components/cartContext";
import ProductDataProvider from "../src/components/ProductDataProvider";
import NavBar from "../src/components/NavBar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

describe("NavBar", () => {
  it("renders no cartitems", () => {
    const mockCartContextValue = {
      cartItems: [],
      addToCart: vi.fn(), // Mock any functions used in your context
      removeFromCart: vi.fn(),
      clearCart: vi.fn(),
    };

    render(
      <ProductDataProvider>
        <CartContext.Provider value={mockCartContextValue}>
        <RouterProvider
          router={createBrowserRouter([
            {
              path: "/",
              element: <NavBar/>,
            },
          ])}
        ></RouterProvider>
        </CartContext.Provider>
      </ProductDataProvider>
    );

    let number = screen.getByTestId("number")
    expect(number).not.toHaveTextContent();
  });

  it("renders cartitems", async () => {
    const mockCartContextValue = {
      cartItems: [
        {
          name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          amount: 1,
          price: 695,
          id: 5,
        },
      ],
      addToCart: vi.fn(), // Mock any functions used in your context
      removeFromCart: vi.fn(),
      clearCart: vi.fn(),
    };

    render(
      <ProductDataProvider>
        <CartContext.Provider value={mockCartContextValue}>
        <RouterProvider
          router={createBrowserRouter([
            {
              path: "/",
              element: <NavBar/>,
            },
          ])}
        ></RouterProvider>
        </CartContext.Provider>
      </ProductDataProvider>
    );

    
    let number = screen.getByTestId("number")
    expect(number).toHaveTextContent("1");
  });

  it("renders various cartitems", async () => {
    const mockCartContextValue = {
      cartItems: [
        {
          name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          amount: 2,
          price: 695,
          id: 5,
        },
      ],
      addToCart: vi.fn(), // Mock any functions used in your context
      removeFromCart: vi.fn(),
      clearCart: vi.fn(),
    };

    render(
      <ProductDataProvider>
        <CartContext.Provider value={mockCartContextValue}>
        <RouterProvider
          router={createBrowserRouter([
            {
              path: "/",
              element: <NavBar/>,
            },
          ])}
        ></RouterProvider>
        </CartContext.Provider>
      </ProductDataProvider>
    );

    
    let number = screen.getByTestId("number")
    expect(number).toHaveTextContent("2");
  });
});
