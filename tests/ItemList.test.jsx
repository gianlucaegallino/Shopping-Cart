import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemList from "../src/components/ItemList";
import ProductDataProvider from "../src/components/ProductDataProvider";
import CartDataProvider from "../src/components/CartDataProvider";

describe("Itemlist", () => {
  it("renders with input", () => {
    const mockitems = [
      {
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        amount: 1,
        price: 695,
        id: 5,
      },
    ];

    render(
      <ProductDataProvider>
        <CartDataProvider>
          <ItemList items={mockitems}></ItemList>
        </CartDataProvider>
      </ProductDataProvider>
    );

    let row = screen.getByText(
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
    );
    expect(row).toBeInTheDocument();
  });
  it("renders fallback without input", () => {
    render(
      <ProductDataProvider>
        <CartDataProvider>
          <ItemList></ItemList>
        </CartDataProvider>
      </ProductDataProvider>
    );

    let fallback = screen.getByText("There is nothing here yet.");
    expect(fallback).toBeInTheDocument();
  });
});
