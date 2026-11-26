import { sumQty } from "./totals.js";
import { useCart } from "./useCart.js";

export function CartBadge() {
  const { lines } = useCart();
  return <span className="badge">🛒 {sumQty(lines)}</span>;
}
