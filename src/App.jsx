import { CartProvider } from "./cart/CartContext.jsx";
import { Cart } from "./cart/Cart.jsx";
import { Header } from "./Header.jsx";
import { ProductList } from "./products/ProductList.jsx";
import "./App.css";

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <ProductList />
        <Cart />
      </main>
    </CartProvider>
  );
}
