import { createContext, useReducer, useState } from "react";
import { cartReducer, initialCart, cartBreakdown } from "./cartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCart);
  const [shipping, setShipping] = useState("standard");

  // Acciones: los consumidores no necesitan conocer el reducer
  const addItem = (product) => dispatch({ type: "add", payload: product });
  const removeItem = (id) => dispatch({ type: "remove", payload: { id } });
  const clearCart = () => dispatch({ type: "clear" });

  // Valores derivados: se calculan en cada render, no se guardan en estado
  const { subtotal, taxes, shippingPrice, total } = cartBreakdown(
    state.items,
    shipping
  );

  const value = {
    items: state.items,
    addItem,
    removeItem,
    clearCart,
    shipping,
    setShipping,
    subtotal,
    taxes,
    shippingPrice,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
