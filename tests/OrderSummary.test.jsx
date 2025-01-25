import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import OrderSummary from "../src/components/OrderSummary";

describe("OrderSummary", () => {
  it("renders correct amount", () => {
    let cartItems = [
      {
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        amount: 1,
        price: 695,
        id: 5,
      },
    ];

    render(<OrderSummary items={cartItems}></OrderSummary>);

    let text = screen.getByTestId("qt");
    let content = text.textContent;
    expect(content).toEqual("1");
  });
  it("renders correct total", () => {
    let cartItems = [
      {
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        amount: 1,
        price: 695,
        id: 5,
      },
    ];

    render(<OrderSummary items={cartItems}></OrderSummary>);

    let text = screen.getByTestId("total");
    let content = text.textContent;
    expect(content).toEqual("$695.00");
  });
  it("renders correct totalWithTaxes", () => {
    let cartItems = [
      {
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        amount: 1,
        price: 695,
        id: 5,
      },
    ];

    render(<OrderSummary items={cartItems}></OrderSummary>);

    let text = screen.getByTestId("total+tax");
    let content = text.textContent;
    expect(content).toEqual("$840.95");
  });
  it("renders correct Taxes", () => {
    let cartItems = [
      {
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        amount: 1,
        price: 695,
        id: 5,
      },
    ];

    render(<OrderSummary items={cartItems}></OrderSummary>);

    let text = screen.getByTestId("tax");
    let content = text.textContent;
    expect(content).toEqual("$145.95");
  });
  it("renders correct fallback", () => {
    render(<OrderSummary></OrderSummary>);

    let fb = screen.getByTestId("fb");
    let fbtext = fb.textContent;

    expect(fb).toBeVisible();
    expect(fbtext).toEqual("There is nothing here yet.");
  });
});
