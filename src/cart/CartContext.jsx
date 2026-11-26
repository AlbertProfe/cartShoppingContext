import { useEffect, useReducer } from "react";
import { products } from "../products/products.js";
import { cartReducer, initialCart } from "./cartReducer.js";
import { CartContext } from "./context.js";
import { readStoredLines, writeStoredLines } from "./storage.js";

function cartFromStorage() {
  const stored = readStoredLines(window.localStorage);
  if (stored === null) return initialCart;
  const lines = stored.filter((line) =>
    products.some((product) => product.id === line.productId),
  );
  return { lines };
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, cartFromStorage);

  useEffect(() => {
    writeStoredLines(window.localStorage, state.lines);
  }, [state.lines]);

  function addToCart(productId) {
    dispatch({ type: "add", productId });
  }

  function removeFromCart(productId) {
    dispatch({ type: "remove", productId });
  }

  const value = {
    lines: state.lines,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
