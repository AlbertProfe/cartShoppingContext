import { useCart } from "../hooks/useCart";

export function CartSummary() {
  const { count, setCount } = useCart();
  return (
    <div>
      <p>Items in cart: {count}</p>
      <button onClick={() => setCount(0)}>Clear</button>
    </div>
  );
}
