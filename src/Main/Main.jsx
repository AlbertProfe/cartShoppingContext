/**
 * Main — the body of the shop, under the header.
 *
 * Presence: the second branch under CartProvider. It stacks the shelf
 * and the cart summary in one column. It does not own state. Header
 * and Main are siblings. The cart crosses from one to the other through
 * context, not through Main.
 *
 * Naming: Main is the landmark for the primary content. ProductList is
 * the shelf. CartSummary is the reading of the cart. Those names stay
 * specific so Main does not become a junk drawer.
 *
 * Flow in: nothing.
 * Flow out: ProductList, then CartSummary.
 *
 * 1. TODO: Do not read useCart here and pass the result down. The
 *          children that need the cart already call the hook.
 * 2. TODO: If you add a region (for example a short note under the
 *          summary), add it here only when it is part of the same
 *          column. A header control belongs in Header.
 */

import { ProductList } from "../ProductList/ProductList";
import { CartSummary } from "../CartSummary/CartSummary";

export function Main() {
  return (
    <main>
      <ProductList />
      <CartSummary />
    </main>
  );
}
