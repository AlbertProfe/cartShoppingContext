import { formatPrice } from "../format.js";
import { findProduct, products } from "../products/products.js";
import { useCart } from "./useCart.js";

export function CartLine({ line }) {
  const { removeFromCart } = useCart();
  const product = findProduct(products, line.productId);
  const linePrice = product.price * line.qty;

  return (
    <li>
      <span>
        {product.name} × {line.qty} — {formatPrice(linePrice)}
      </span>
      <button type="button" onClick={() => removeFromCart(line.productId)}>
        −
      </button>
    </li>
  );
}
