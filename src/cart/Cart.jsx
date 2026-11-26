import { useState } from "react";
import { products } from "../products/products.js";
import { CartLine } from "./CartLine.jsx";
import { CartTotal } from "./CartTotal.jsx";
import { DEFAULT_SHIPPING_ID, shippingOptions } from "./shipping.js";
import { deriveTotals } from "./totals.js";
import { useCart } from "./useCart.js";

export function Cart() {
  const { lines } = useCart();
  const [shippingId, setShippingId] = useState(DEFAULT_SHIPPING_ID);
  const selected = shippingOptions.find((option) => option.id === shippingId);
  const totals = deriveTotals(lines, products, selected.price);

  return (
    <section>
      <h2>Cart</h2>
      {lines.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <ul>
          {lines.map((line) => (
            <CartLine key={line.productId} line={line} />
          ))}
        </ul>
      )}
      <CartTotal
        totals={totals}
        shippingId={shippingId}
        onShippingChange={setShippingId}
      />
    </section>
  );
}
