import { describe, expect, it } from "vitest";
import { readStoredLines, writeStoredLines } from "./storage.js";

function memoryStorage(initial = {}) {
  const data = { ...initial };
  return {
    getItem(key) {
      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : null;
    },
    setItem(key, value) {
      data[key] = value;
    },
  };
}

describe("cart storage", () => {
  it("returns null when nothing has been saved", () => {
    expect(readStoredLines(memoryStorage())).toBeNull();
  });

  it("round-trips lines", () => {
    const storage = memoryStorage();
    const lines = [{ productId: "keyboard", qty: 2 }];
    writeStoredLines(storage, lines);
    expect(readStoredLines(storage)).toEqual(lines);
  });

  it("keeps an empty cart as an empty list, not as 'nothing saved'", () => {
    const storage = memoryStorage();
    writeStoredLines(storage, []);
    expect(readStoredLines(storage)).toEqual([]);
  });

  it("drops a line with qty 0 and ignores junk", () => {
    const storage = memoryStorage({
      "cart.lines": JSON.stringify([
        { productId: "mouse", qty: 0 },
        { productId: "keyboard", qty: 2 },
        { qty: 3 },
        null,
      ]),
    });
    expect(readStoredLines(storage)).toEqual([{ productId: "keyboard", qty: 2 }]);
  });

  it("returns null when the saved text is not JSON", () => {
    const storage = memoryStorage({ "cart.lines": "nope" });
    expect(readStoredLines(storage)).toBeNull();
  });
});
