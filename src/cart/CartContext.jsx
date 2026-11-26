import { useReducer } from "react";
import { cartReducer, initialCart } from "./cartReducer.js";
import { CartContext } from "./context.js";

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCart);

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
