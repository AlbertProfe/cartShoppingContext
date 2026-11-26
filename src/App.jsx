// Iteration 3. The lines live in App, the closest parent of the badge and the cart.
// Totals are computed here on each render. They are not stored.

import { useState } from "react";
import "./App.css";

const products = [
  { id: "keyboard", name: "Keyboard", price: 49 },
  { id: "mouse", name: "Mouse", price: 25 },
];

const TAX_RATE = 0.21;
const SHIPPING = 4.95;

function roundMoney(amount) {
  return Math.round((amount + Number.EPSILON) * 100) / 100;
}

function findProduct(productId) {
  return products.find((product) => product.id === productId);
}

function deriveTotals(lines) {
  const units = lines.reduce((sum, line) => sum + line.qty, 0);
  const subtotal = roundMoney(
    lines.reduce((sum, line) => {
      const product = findProduct(line.productId);
      return sum + product.price * line.qty;
    }, 0),
  );
  const tax = roundMoney(subtotal * TAX_RATE);
  const shipping = lines.length === 0 ? 0 : SHIPPING;
  const total = roundMoney(subtotal + tax + shipping);
  return { units, subtotal, tax, shipping, total };
}

function formatPrice(amount) {
  const text = Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
  return `${text} €`;
}

function formatMoney(amount) {
  return `${amount.toFixed(2)} €`;
}

function CartBadge({ units }) {
  return <span className="badge">🛒 {units}</span>;
}

function Header({ units }) {
  return (
    <header>
      <h1>My Shop</h1>
      <CartBadge units={units} />
    </header>
  );
}

function ProductCard({ product, onAdd }) {
  return (
    <li>
      <span>
        {product.name} — {formatPrice(product.price)}
      </span>
      <button type="button" onClick={() => onAdd(product.id)}>
        Add to cart
      </button>
    </li>
  );
}

function ProductList({ products, onAdd }) {
  return (
    <section>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} />
        ))}
      </ul>
    </section>
  );
}

function CartLine({ line, product, onRemove }) {
  const linePrice = product.price * line.qty;
  return (
    <li>
      <span>
        {product.name} × {line.qty} — {formatPrice(linePrice)}
      </span>
      <button type="button" onClick={() => onRemove(line.productId)}>
        −
      </button>
    </li>
  );
}

function CartTotal({ totals }) {
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
      <div>
        <span>Shipping</span>
        <span>{formatMoney(totals.shipping)}</span>
      </div>
      <div className="total">
        <span>Total</span>
        <span>{formatMoney(totals.total)}</span>
      </div>
    </div>
  );
}

function Cart({ lines, onRemove, totals }) {
  return (
    <section>
      <h2>Cart</h2>
      {lines.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <ul>
          {lines.map((line) => (
            <CartLine
              key={line.productId}
              line={line}
              product={findProduct(line.productId)}
              onRemove={onRemove}
            />
          ))}
        </ul>
      )}
      <CartTotal totals={totals} />
    </section>
  );
}

export default function App() {
  const [lines, setLines] = useState([{ productId: "mouse", qty: 1 }]);

  function addToCart(productId) {
    setLines((current) => {
      const existing = current.find((line) => line.productId === productId);
      if (existing) {
        return current.map((line) =>
          line.productId === productId ? { ...line, qty: line.qty + 1 } : line,
        );
      }
      return [...current, { productId, qty: 1 }];
    });
  }

  function removeFromCart(productId) {
    setLines((current) =>
      current
        .map((line) =>
          line.productId === productId ? { ...line, qty: line.qty - 1 } : line,
        )
        .filter((line) => line.qty > 0),
    );
  }

  const totals = deriveTotals(lines);

  return (
    <>
      <Header units={totals.units} />
      <main>
        <ProductList products={products} onAdd={addToCart} />
        <Cart lines={lines} onRemove={removeFromCart} totals={totals} />
      </main>
    </>
  );
}
