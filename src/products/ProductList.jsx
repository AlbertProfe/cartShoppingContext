import { products } from "./products.js";
import { ProductCard } from "./ProductCard.jsx";

export function ProductList() {
  return (
    <section>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
}
