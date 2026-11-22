import { ProductList } from "../ProductList/ProductList";
import { CartSummary } from "../CartSummary/CartSummary";

export function Main() {
  return (
    <main>
      <ProductList />
      <CartSummary />
    </main>
  );
}
