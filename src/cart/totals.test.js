import { describe, expect, it } from "vitest";
import { products } from "../products/products.js";
import { deriveTotals } from "./totals.js";

const mouse = [{ productId: "mouse", qty: 1 }];
const both = [
  { productId: "mouse", qty: 1 },
  { productId: "keyboard", qty: 2 },
];

describe("deriveTotals", () => {
  it("matches the first sketch for one mouse and standard shipping", () => {
    expect(deriveTotals(mouse, products, 4.95)).toEqual({
      units: 1,
      subtotal: 25,
      tax: 5.25,
      shipping: 4.95,
      total: 35.2,
    });
  });

  it("matches the click-through: mouse × 1 and keyboard × 2", () => {
    expect(deriveTotals(both, products, 4.95)).toEqual({
      units: 3,
      subtotal: 123,
      tax: 25.83,
      shipping: 4.95,
      total: 153.78,
    });
  });

  it("ships nothing when the cart is empty, even if a method has a price", () => {
    expect(deriveTotals([], products, 4.95)).toEqual({
      units: 0,
      subtotal: 0,
      tax: 0,
      shipping: 0,
      total: 0,
    });
  });

  it("rounds a decimal price to the cent before tax", () => {
    const catalog = [{ id: "cable", name: "Cable", price: 10.1 }];
    const lines = [{ productId: "cable", qty: 3 }];
    expect(deriveTotals(lines, catalog, 0)).toEqual({
      units: 3,
      subtotal: 30.3,
      tax: 6.36,
      shipping: 0,
      total: 36.66,
    });
  });

  it("rounds tax that is not a clean tenth", () => {
    const catalog = [{ id: "pad", name: "Pad", price: 19.99 }];
    const lines = [{ productId: "pad", qty: 2 }];
    expect(deriveTotals(lines, catalog, 4.95)).toEqual({
      units: 2,
      subtotal: 39.98,
      tax: 8.4,
      shipping: 4.95,
      total: 53.33,
    });
  });

  it("refuses a line whose product is missing", () => {
    expect(() => deriveTotals(mouse, [], 0)).toThrow(/mouse/);
  });
});
