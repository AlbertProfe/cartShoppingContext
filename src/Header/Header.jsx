/**
 * Header — the top of the shop.
 *
 * Presence: first visible region under CartProvider. The shopper reads
 * the name of the shop on the left and the cart badge on the right,
 * before they look at the shelf. The header does not list products and
 * it does not show prices.
 *
 * Naming: Header is the band across the top, not the cart and not the
 * badge. CartBadge has its own name because it is the piece that
 * subscribes to the cart.
 *
 * Flow in: nothing. No cart props. CartBadge calls useCart itself.
 * Flow out: a title and a badge, rendered as children.
 *
 * 1. TODO: Do not pass items into CartBadge. If you are about to, stop.
 *          That is prop drilling, and it is the design this lab replaces.
 * 2. TODO: At Return, the badge number and the summary must agree on
 *          how many units are in the cart. The header does not compute
 *          that number.
 */

import { CartBadge } from "../CartBadge/CartBadge";

export function Header() {
  return (
    <header>
      <h1>My Shop</h1>
      <CartBadge />
    </header>
  );
}
