import { useCart } from "../cart/useCart.js";
import { formatPrice } from "../format.js";

export function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <li>
      <span>
        {product.name} — {formatPrice(product.price)}
      </span>
      <button type="button" onClick={() => addToCart(product.id)}>
        Add to cart
      </button>
    </li>
  );
}
