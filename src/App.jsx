// Iteration 1. Every number is written by hand.
// They match doc/skeleton-senior-cycle-1/data-model-draft.json.

import "./App.css";

function CartBadge() {
  // later: units = sum of qty
  return <span className="badge">🛒 1</span>;
}

function Header() {
  return (
    <header>
      <h1>My Shop</h1>
      <CartBadge />
    </header>
  );
}

// Row text is written at the call site. name and price are not props yet.
function ProductCard({ children }) {
  return (
    <li>
      {children}
      {/* later: add → Cart */}
      <button type="button">Add to cart</button>
    </li>
  );
}

function ProductList() {
  return (
    <section>
      <h2>Products</h2>
      <ul>
        <ProductCard>
          <span>Keyboard — 49 €</span>
        </ProductCard>
        <ProductCard>
          <span>Mouse — 25 €</span>
        </ProductCard>
      </ul>
    </section>
  );
}

function CartLine() {
  return (
    <li>
      <span>Mouse × 1 — 25 €</span>
      {/* remove */}
      <button type="button">−</button>
    </li>
  );
}

function CartTotal() {
  return (
    <div className="totals">
      {/* total = sum(lines) */}
      <div>
        <span>Subtotal</span>
        <span>25.00 €</span>
      </div>
      <div>
        <span>Tax</span>
        <span>5.25 €</span>
      </div>
      <div>
        <span>Shipping</span>
        <span>4.95 €</span>
      </div>
      <div className="total">
        <span>Total</span>
        <span>35.20 €</span>
      </div>
    </div>
  );
}

function Cart() {
  return (
    <section>
      <h2>Cart</h2>
      <ul>
        <CartLine />
      </ul>
      <CartTotal />
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <ProductList />
        <Cart />
      </main>
    </>
  );
}
