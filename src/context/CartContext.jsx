/**
 * CartContext — the shared room the cart lives in.
 *
 * Presence: CartProvider wraps the shop in App, above Header and above Main.
 * The badge (header) and the product button (main) sit in different
 * branches. They do not pass props to each other. They meet here.
 * That is the whole reason this file exists.
 *
 * Naming: CartContext is the room (the React context object). CartProvider
 * is the component that fills the room. The value in the room is not
 * "the context". The value is the cart API: items and dispatch.
 *
 * Flow in: children, the tree under the provider. Later, actions, when
 * some child calls dispatch.
 * Flow out: { items, dispatch } to useCart. items starts as [].
 *           dispatch forwards an action to cartReducer.
 *
 * 1. TODO: Keep this value to { items, dispatch }. Subtotal, tax, and
 *          shipping do not belong in the room. Tax is derived. Shipping
 *          is local to CartSummary. Stored copies go stale.
 * 2. TODO: After cartReducer answers "add", click a product and confirm
 *          both branches see the new items. If only one updates, the
 *          value is not what you think.
 */

import { createContext, useReducer } from "react";
import { cartReducer, initialCart } from "./cartReducer";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCart);

  const value = { items: state.items, dispatch };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}
