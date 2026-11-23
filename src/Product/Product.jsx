import { useCart } from "../hooks/useCart";

export function Product({ id, name, price }) {
  const { addItem } = useCart();
  return (
    <li>
      {name} — {price} €{" "}
      <button onClick={() => addItem({ id, name, price })}>Add to cart</button>
    </li>
  );
}
