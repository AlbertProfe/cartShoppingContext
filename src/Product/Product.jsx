import { useCart } from "../hooks/useCart";

export function Product({ name }) {
  const { setCount } = useCart();
  return (
    <li>
      {name}{" "}
      <button onClick={() => setCount((c) => c + 1)}>Add to cart</button>
    </li>
  );
}
