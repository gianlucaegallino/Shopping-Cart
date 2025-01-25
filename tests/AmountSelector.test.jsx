import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AmountSelector from "../src/components/AmountSelector";
import { CartContext } from "../src/components/cartContext.js";


describe("Selector component", () => {
    it("adds successfully", async () => {
        console.log(CartContext);
      const mockAddToCart = vi.fn(); // Mock addToCart function
      const user = userEvent.setup();
  
      render(
        <CartContext.Provider value={{ addToCart: mockAddToCart }}>
          <AmountSelector id={0} />
        </CartContext.Provider>
      );
  
      const button = screen.getByPlaceholderText("plus");
      const input = screen.getByRole("textbox");
  
      await user.click(button);
  
      // Assert that the input's value is updated correctly
      expect(input.value).toBe("1");
    });
  
    it("substracts successfully", async () => {
      const mockAddToCart = vi.fn();
      const user = userEvent.setup();
  
      render(
        <CartContext.Provider value={{ addToCart: mockAddToCart }}>
          <AmountSelector id={0} />
        </CartContext.Provider>
      );
  
      const button = screen.getByPlaceholderText("plus");
      const buttonminus = screen.getByPlaceholderText("minus");
      const input = screen.getByRole("textbox");
  
      await user.click(button);
      await user.click(buttonminus);
  
      expect(input.value).toBe("0");
    });
  
    it("handles negative quantities", async () => {
      const mockAddToCart = vi.fn();
      const user = userEvent.setup();
  
      render(
        <CartContext.Provider value={{ addToCart: mockAddToCart }}>
          <AmountSelector id={0} />
        </CartContext.Provider>
      );
  
      const buttonminus = screen.getByPlaceholderText("minus");
      const input = screen.getByRole("textbox");
  
      await user.click(buttonminus);
  
      expect(input.value).toBe("0");
    });
  
    it("handles quantities > 10", async () => {
      const mockAddToCart = vi.fn();
      const user = userEvent.setup();
  
      render(
        <CartContext.Provider value={{ addToCart: mockAddToCart }}>
          <AmountSelector id={0} />
        </CartContext.Provider>
      );
  
      const button = screen.getByPlaceholderText("plus");
      const input = screen.getByRole("textbox");
  
      for (let i = 0; i < 15; i++) {
        await user.click(button);
      }
  
      expect(input.value).toBe("10");
    });
  
    it("handles invalid inputs", async () => {
      const mockAddToCart = vi.fn();
      const user = userEvent.setup();
  
      render(
        <CartContext.Provider value={{ addToCart: mockAddToCart }}>
          <AmountSelector id={0} />
        </CartContext.Provider>
      );
  
      const input = screen.getByRole("textbox");
  
      await user.type(input, "F");
  
      expect(input.value).toBe("0");
    });
  
    it("handles submit", async () => {
      const mockAddToCart = vi.fn();
      const user = userEvent.setup();
  
      render(
        <CartContext.Provider value={{ addToCart: mockAddToCart }}>
          <AmountSelector id={0} />
        </CartContext.Provider>
      );
  
      const buttonPlus = screen.getByPlaceholderText("plus");
      const buttonAddToCart = screen.getByPlaceholderText("addToCart");
      const input = screen.getByRole("textbox");
  
      await user.click(buttonPlus);
      await user.click(buttonAddToCart);
  
      // Ensure addToCart was called with correct parameters
      expect(mockAddToCart).toHaveBeenCalledWith(0, 1);
  
      // Ensure the input resets to 0 after adding to cart
      expect(input.value).toBe("0");
    });
  });