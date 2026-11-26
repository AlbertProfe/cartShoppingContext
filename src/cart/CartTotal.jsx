import { formatMoney } from "../format.js";
import { shippingOptions } from "./shipping.js";

export function CartTotal({ totals, shippingId, onShippingChange }) {
  return (
    <div className="totals">
      <div>
        <span>Subtotal</span>
        <span>{formatMoney(totals.subtotal)}</span>
      </div>
      <div>
        <span>Tax</span>
        <span>{formatMoney(totals.tax)}</span>
      </div>
      <div className="shipping-row">
        <label htmlFor="shipping">Shipping</label>
        <span className="shipping-choice">
          <select
            id="shipping"
            value={shippingId}
            onChange={(event) => onShippingChange(event.target.value)}
          >
            {shippingOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <span>{formatMoney(totals.shipping)}</span>
        </span>
      </div>
      <div className="total">
        <span>Total</span>
        <span>{formatMoney(totals.total)}</span>
      </div>
    </div>
  );
}
