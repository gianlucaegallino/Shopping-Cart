import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductArea from "../src/components/ProductArea";
import { ProductContext } from "../src/components/productContext";
import CartDataProvider from "../src/components/CartDataProvider";

describe("ProductArea", () => {
  it("renders correct amount", () => {
    const mockProductContextValue = [
      {
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        amount: 1,
        price: 695,
        id: 5,
      },
      {
        name: "John Cena minifigure",
        amount: 1,
        price: 700,
        id: 6,
      },
    ];

    render(
      <ProductContext.Provider value={mockProductContextValue}>
        <CartDataProvider>
          <ProductArea></ProductArea>
        </CartDataProvider>
      </ProductContext.Provider>
    );

    let cards = screen.getAllByTestId("shc");
    expect(cards).toHaveLength(2);
  });
});
