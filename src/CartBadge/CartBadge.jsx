import { useCart } from "../hooks/useCart";

export function CartBadge() {
  const { count } = useCart();
  return <span>🛒 {count}</span>;
}
