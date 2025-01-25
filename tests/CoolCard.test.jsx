import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CoolCard from "../src/components/CoolCard";

describe("CoolCard", () => {
  it("renders prod name", () => {
    render(<CoolCard prodName="testing"></CoolCard>);

    let text = screen.getByText("testing");
    expect(text).toBeInTheDocument();
  });

  it("renders price", () => {
    render(<CoolCard price="1466"></CoolCard>);

    let price = screen.getByText("$1466");
    expect(price).toBeInTheDocument();
  });

  it("renders image", () => {
    render(<CoolCard prodName="image" imageUrl="image.png"></CoolCard>);

    let image = screen.getByAltText("image");
    expect(image).toBeInTheDocument();
  });

  it("renders fallbacks", () => {
    render(<CoolCard></CoolCard>);

    let text = screen.getByText("productName");
    let price = screen.getByText("$0");
    let image = screen.getByAltText("productName");

    expect(text).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
