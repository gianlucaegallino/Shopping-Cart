import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemList from "../src/components/CartItemList";
import { CartContext } from "../src/components/cartContext";
import ProductDataProvider from "../src/components/ProductDataProvider";
import CartDataProvider from "../src/components/CartDataProvider";
import userEvent from "@testing-library/user-event";

describe("Itemlist", () => {
  it("renders with input", () => {
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
          <ItemList></ItemList>
        </CartContext.Provider>
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

  it("deletes correctly", async () => {
    const user = userEvent.setup();
  
    const mockRemoveFromCart = vi.fn();
  
    const mockCartContextValue = {
      cartItems: [
        {
          name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          amount: 1,
          price: 695,
          id: 5,
        },
      ],
      addToCart: vi.fn(),
      removeFromCart: mockRemoveFromCart, // Use the mocked function here
      clearCart: vi.fn(),
    };
  
    render(
      <ProductDataProvider>
        <CartContext.Provider value={mockCartContextValue}>
          <ItemList />
        </CartContext.Provider>
      </ProductDataProvider>
    );
  
    const button = screen.getByRole("button"); // Assuming this is the delete button
    await user.click(button);
  
    // Verify that removeFromCart was called with the correct ID
    expect(mockRemoveFromCart).toHaveBeenCalledWith(5);
  
  });
});
