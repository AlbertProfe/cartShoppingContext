import { describe, expect, it } from "vitest";
import { cartReducer, initialCart } from "./cartReducer.js";

describe("cartReducer", () => {
  it("starts from the draft line, mouse × 1", () => {
    expect(initialCart).toEqual({ lines: [{ productId: "mouse", qty: 1 }] });
  });

  it("adds a new product as one line with qty 1", () => {
    const next = cartReducer(initialCart, { type: "add", productId: "keyboard" });
    expect(next.lines).toEqual([
      { productId: "mouse", qty: 1 },
      { productId: "keyboard", qty: 1 },
    ]);
  });

  it("adds the same product by raising qty, and does not copy the old line", () => {
    const next = cartReducer(initialCart, { type: "add", productId: "mouse" });
    expect(next.lines).toEqual([{ productId: "mouse", qty: 2 }]);
    expect(initialCart.lines[0].qty).toBe(1);
  });

  it("removes one and drops the line at zero", () => {
    const once = cartReducer(
      { lines: [{ productId: "keyboard", qty: 2 }] },
      { type: "remove", productId: "keyboard" },
    );
    expect(once.lines).toEqual([{ productId: "keyboard", qty: 1 }]);

    const gone = cartReducer(once, { type: "remove", productId: "keyboard" });
    expect(gone.lines).toEqual([]);
  });

  it("leaves the cart alone when the id is not there", () => {
    const next = cartReducer(initialCart, { type: "remove", productId: "keyboard" });
    expect(next).toEqual(initialCart);
  });

  it("clears every line", () => {
    const next = cartReducer(initialCart, { type: "clear" });
    expect(next).toEqual({ lines: [] });
  });

  it("ignores an unknown action", () => {
    const next = cartReducer(initialCart, { type: "nope" });
    expect(next).toBe(initialCart);
  });
});
