/**
 * ProductList — the shelf.
 *
 * Presence: it sits in Main, above CartSummary. It is the list the
 * shopper browses. It does not show the cart, the badge, or the total.
 *
 * Naming: "list" because it repeats one Product per catalog row.
 * PRODUCTS is the catalog (data/products.js), not the items in the cart.
 *
 * Flow in: PRODUCTS, a static array.
 * Flow out: one Product, with id, name, and price, for each row.
 *           It does not call useCart. It has nothing to say to the cart.
 *
 * 1. TODO: Pass id, name, and price. The key is product.id, not the
 *          array index and not the name (names can repeat, ids must not).
 * 2. TODO: Do not hard-code Keyboard and Mouse in this file. A new row
 *          in PRODUCTS should appear here by itself.
 */

import { PRODUCTS } from "../data/products";
import { Product } from "../Product/Product";

export function ProductList() {
  return (
    <ul>
      {PRODUCTS.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </ul>
  );
}
