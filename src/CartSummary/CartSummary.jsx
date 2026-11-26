/**
 * CartSummary — the cart the shopper can read.
 *
 * Presence: it sits in Main, under the shelf. It shows which lines are
 * in the cart, what they cost, how they will be delivered, and Clear.
 * The header badge is a different view of the same items. This block
 * is the view with money.
 *
 * Naming: summary, because it is a reading of the cart, not the cart
 * itself. A row here is an item (it has qty). shippingMethod is the
 * selected key in SHIPPING, and it is local state: only this screen
 * needs it. subtotal, tax, and total are derived names. They are
 * computed during render. They are not stored.
 *
 * Flow in: items and dispatch from useCart. SHIPPING from the fixture.
 *          shippingMethod from useState, starting at "standard".
 * Flow out: dispatch "remove" with { id } from the minus button.
 *           dispatch "clear" from Clear.
 *           The select only changes shippingMethod.
 *
 * 1. TODO: subtotal is the sum of item.price * item.qty. Empty is 0.
 * 2. TODO: tax is 21% of the subtotal (TAX_RATE). Do not store it.
 * 3. TODO: shippingPrice comes from SHIPPING[shippingMethod]. The lookup
 *          below already reads the table so the row can show a price.
 *          Bonus: standard shipping is 0 when the subtotal is over 50.
 * 4. TODO: total is subtotal + tax + shippingPrice.
 * 5. TODO: On each line, render "Name × qty — line €" (line is price * qty).
 * 6. TODO: Show subtotal, tax, and total with two decimals (toFixed(2)).
 *          An empty cart shows 0.00 and must not crash.
 * 7. TODO: The minus button already dispatches "remove". Make the reducer
 *          honour it, including dropping the line at qty 0.
 * 8. TODO: Clear already dispatches "clear". Make the reducer empty items.
 *          Bonus: a plus button on the line dispatches "add" with that
 *          line's id, name, and price.
 */

import { useState } from "react";
import { SHIPPING } from "../data/shipping";
import { useCart } from "../hooks/useCart";

const TAX_RATE = 0.21;

export function CartSummary() {
  const { items, dispatch } = useCart();
  const [shippingMethod, setShippingMethod] = useState("standard");

  // Reading the table is not the total. TODO 3 and TODO 4 still own the money.
  const shippingPrice = SHIPPING[shippingMethod].price;

  function handleRemove(id) {
    dispatch({ type: "remove", payload: { id } });
  }

  function handleClear() {
    dispatch({ type: "clear" });
  }

  return (
    <section className="summary">
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {/* TODO 5: "Name × qty — line €", line = item.price * item.qty. */}
              <span>{item.name}</span>
              <button
                type="button"
                onClick={() => handleRemove(item.id)}
                aria-label={`Remove one ${item.name}`}
              >
                −
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="totals">
        <div>
          <span>Subtotal</span>
          {/* TODO 1 and TODO 6 */}
          <span>—</span>
        </div>
        <div>
          <span>Taxes ({Math.round(TAX_RATE * 100)}%)</span>
          {/* TODO 2 and TODO 6 */}
          <span>—</span>
        </div>
        <div className="shipping-row">
          <label htmlFor="shipping">Shipping</label>
          <select
            id="shipping"
            value={shippingMethod}
            onChange={(event) => setShippingMethod(event.target.value)}
          >
            {Object.entries(SHIPPING).map(([key, method]) => (
              <option key={key} value={key}>
                {method.label}
              </option>
            ))}
          </select>
          <span>{shippingPrice.toFixed(2)} €</span>
        </div>
        <div className="total">
          <span>Total</span>
          {/* TODO 4 and TODO 6 */}
          <span>—</span>
        </div>
      </div>

      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </section>
  );
}
