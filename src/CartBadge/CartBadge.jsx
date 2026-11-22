import { useCart } from "../hooks/useCart";
import { cartQty } from "../context/cartReducer";

export function CartBadge() {
  const { items } = useCart();
  return <span>🛒 {cartQty(items)}</span>;
}
