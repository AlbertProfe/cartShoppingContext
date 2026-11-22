import { useCart } from "../hooks/useCart";
import { cartTotal } from "../context/cartReducer";

export function CartSummary() {
  const { items, dispatch } = useCart();
  const total = cartTotal(items);

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} × {item.qty} — {item.qty * item.price} €{" "}
                <button
                  onClick={() =>
                    dispatch({ type: "remove", payload: { id: item.id } })
                  }
                >
                  −
                </button>
              </li>
            ))}
          </ul>
          <p>Total: {total} €</p>
          <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
        </>
      )}
    </div>
  );
}
