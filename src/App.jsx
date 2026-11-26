// Iteration 2. One products array, one lines array. The screen reads them.
// A line keeps productId only. Name and price come from the product.

import "./App.css";

const products = [
  { id: "keyboard", name: "Keyboard", price: 49 },
  { id: "mouse", name: "Mouse", price: 25 },
];

const lines = [{ productId: "mouse", qty: 1 }];

function formatPrice(amount) {
  const text = Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
  return `${text} €`;
}

function findProduct(productId) {
  return products.find((product) => product.id === productId);
}

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

function ProductCard({ product }) {
  return (
    <li>
      <span>
        {product.name} — {formatPrice(product.price)}
      </span>
      {/* later: add → Cart */}
      <button type="button">Add to cart</button>
    </li>
  );
}

function ProductList({ products }) {
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

function CartLine({ line, product }) {
  const linePrice = product.price * line.qty;
  return (
    <li>
      <span>
        {product.name} × {line.qty} — {formatPrice(linePrice)}
      </span>
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

function Cart({ lines }) {
  return (
    <section>
      <h2>Cart</h2>
      <ul>
        {lines.map((line) => (
          <CartLine
            key={line.productId}
            line={line}
            product={findProduct(line.productId)}
          />
        ))}
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
        <ProductList products={products} />
        <Cart lines={lines} />
      </main>
    </>
  );
}
