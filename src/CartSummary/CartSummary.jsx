import { useCart } from "../hooks/useCart";
import { SHIPPING, TAX_RATE } from "../context/cartReducer";

const fmt = (n) => n.toFixed(2);

export function CartSummary() {
  const {
    items,
    removeItem,
    clearCart,
    shipping,
    setShipping,
    subtotal,
    taxes,
    shippingPrice,
    total,
  } = useCart();

  return (
    <div>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} × {item.qty} — {fmt(item.qty * item.price)} €{" "}
              <button onClick={() => removeItem(item.id)}>−</button>
            </li>
          ))}
        </ul>
      )}

      <label>
        Shipping:{" "}
        <select value={shipping} onChange={(e) => setShipping(e.target.value)}>
          {Object.entries(SHIPPING).map(([key, { label, price }]) => (
            <option key={key} value={key}>
              {label} — {fmt(price)} €
            </option>
          ))}
        </select>
      </label>

      <p>Subtotal: {fmt(subtotal)} €</p>
      <p>Taxes ({TAX_RATE * 100}% VAT): {fmt(taxes)} €</p>
      <p>Shipping: {fmt(shippingPrice)} €</p>
      <p>
        <strong>Total: {fmt(total)} €</strong>
      </p>

      <button onClick={clearCart} disabled={items.length === 0}>
        Clear
      </button>
    </div>
  );
}
