/**
 * useCart — the one door into the cart room.
 *
 * Presence: Product, CartBadge, and CartSummary are far apart in the tree.
 * They do not import CartContext. They call this hook, so only one file
 * knows how the door works. App, Header, Main, and ProductList do not
 * call it: they do not need the cart.
 *
 * Naming: hooks start with "use". Cart is the thing behind the door.
 *
 * Flow in: no arguments. It reads the nearest CartProvider.
 * Flow out: { items, dispatch }. Outside the provider there is no cart,
 *           so the hook throws a named error instead of failing later
 *           on a missing items array.
 *
 * 1. TODO: Do not compute totals, tax, or qty in this file. A hook that
 *          starts doing the cart's jobs becomes a second reducer.
 * 2. TODO: If a new component needs the cart, call useCart there. Do not
 *          thread items through props "just for one more screen".
 */

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart() {
  const cart = useContext(CartContext);

  if (cart === null) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return cart;
}
