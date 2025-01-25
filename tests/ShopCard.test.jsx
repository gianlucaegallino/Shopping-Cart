import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CartContext } from "../src/components/cartContext";
import ProductDataProvider from "../src/components/ProductDataProvider";
import ShopCard from "../src/components/ShopCard";

describe("ShopCard", () => {
  const mockCartContextValue = {
    cartItems: [],
    addToCart: vi.fn(), // Mock any functions used in your context
    removeFromCart: vi.fn(),
    clearCart: vi.fn(),
  };

  it("renders prod name", () => {
    render(
      <ProductDataProvider>
        <CartContext.Provider value={mockCartContextValue}>
          <ShopCard prodName="testing"></ShopCard>
        </CartContext.Provider>
      </ProductDataProvider>
    );
    let text = screen.getByText("testing");
    expect(text).toBeInTheDocument();
  });

  it("renders price", () => {
    render(
      <ProductDataProvider>
        <CartContext.Provider value={mockCartContextValue}>
          <ShopCard price={1466}></ShopCard>
        </CartContext.Provider>q
      </ProductDataProvider>
    );

    let price = screen.getByText("$1466");
    expect(price).toBeInTheDocument();
  });

  it("renders image", () => {
    render(
      <ProductDataProvider>
        <CartContext.Provider value={mockCartContextValue}>
          <ShopCard prodName="image" imageUrl="image.png"></ShopCard>
        </CartContext.Provider>
      </ProductDataProvider>
    );

    let image = screen.getByAltText("image");
    expect(image).toBeInTheDocument();
  });

  it("renders fallbacks", () => {
    render(
      <ProductDataProvider>
        <CartContext.Provider value={mockCartContextValue}>
          <ShopCard></ShopCard>
        </CartContext.Provider>
      </ProductDataProvider>
    );

    let text = screen.getByText("productName");
    let price = screen.getByText("$0");
    let image = screen.getByAltText("productName");

    expect(text).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
