import { useCart } from "../hooks/useCart";

export function Product({ id, name, price }) {
  const { dispatch } = useCart();
  return (
    <li>
      {name} — {price} €{" "}
      <button
        onClick={() =>
          dispatch({ type: "add", payload: { id, name, price } })
        }
      >
        Add to cart
      </button>
    </li>
  );
}
