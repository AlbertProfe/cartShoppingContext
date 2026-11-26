/**
 * CartBadge — the unit count in the header.
 *
 * Presence: Header renders it, on the far side of the tree from Product.
 * There is no prop from the button to this badge. When Add works, the
 * number changes because useCart reads the same items the reducer returned.
 * One sentence for the screen: tap Add to cart, and the number in the
 * header goes up.
 *
 * Naming: a badge is a count you can see at a glance. It is units, not
 * euros, and not the number of lines. cartQty would be a fine name for
 * the number you compute. Do not call it total — total is money, and it
 * belongs to CartSummary.
 *
 * Flow in: items from useCart.
 * Flow out: a number rendered next to the cart mark. No dispatch. The
 *           badge does not change the cart.
 *
 * 1. TODO: Replace the dash with the sum of item.qty. Two keyboards are 2.
 *          items.length is the number of lines, and it is the wrong number
 *          as soon as a qty is greater than 1. An empty cart shows 0.
 * 2. TODO: Keep the badge free of prices. It does not import SHIPPING
 *          and it does not format euros.
 */

import { useCart } from "../hooks/useCart";

export function CartBadge() {
  const { items } = useCart();

  // TODO 1: sum item.qty. The dash is the placeholder, not the answer.
  const unitCount = items ? "—" : "—";

  return <span className="badge">🛒 {unitCount}</span>;
}
