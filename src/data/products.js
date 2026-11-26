/**
 * products — the catalog, the things the shop sells.
 *
 * Presence: this is not the cart. The shelf (ProductList) reads it.
 * Nothing in the header reads it. A product becomes a cart line only
 * after the shopper adds it, and that line lives in cart state, not here.
 *
 * Naming: a product is { id, name, price }. It has no qty. Qty belongs
 * to an item, which is a line already in the cart. If a name feels
 * slippery, the design is slippery — keep "product" and "item" apart.
 *
 * Flow in: none. This module is a fixture.
 * Flow out: PRODUCTS, read by ProductList and passed to Product as props.
 *
 * 1. TODO: Check every product has id, name, and price, and no qty.
 * 2. TODO: Add a third product only by adding an object here. The list
 *          should render it without any other change.
 */

export const PRODUCTS = [
  { id: "keyboard", name: "Keyboard", price: 49 },
  { id: "mouse", name: "Mouse", price: 25 },
];
