# Cart Shopping Context

Lab#RE08-1 for [albertprofe.dev](https://albertprofe.dev/reactjs/rjslab8-1.html). A small React shop that shows how **context** shares state across two branches of the tree, with no prop drilling.

`CartProvider` owns a `count`. `CartBadge` (in the header) and `Product` / `CartSummary` (in the main column) read or update that count through the `useCart` hook. They have no props in common.

## Run it

```bash
npm install
npm run dev
```

## What is in this repo

- **v0.0** — Vite + React scaffold
- **v0.1** — the cart context lab, with one folder per component

```
src/
  App.jsx
  main.jsx
  context/CartContext.jsx    # createContext + CartProvider
  hooks/useCart.js
  Header/Header.jsx
  CartBadge/CartBadge.jsx
  Main/Main.jsx
  ProductList/ProductList.jsx
  Product/Product.jsx
  CartSummary/CartSummary.jsx
```

The shop lists two products, Keyboard and Mouse.

## What to notice

- `Product` and `CartBadge` sit in different branches. Clicking **Add to cart** still updates the badge in the header.
- Without context, you would lift `count` into `App` and pass it down through `Main`, `ProductList`, `Header`, and so on (prop drilling).
- Every consumer re-renders when the context value changes. That is fine here, and it is why bigger apps split contexts (for example `CartContext` and `ThemeContext`).

## Next features (not in this version)

- A theme toggle (dark / light) read by many components.
- A logged-in user shown in the navbar and used by a profile page.
- Cart items as an array `{id, name, qty}` instead of a number, with a total price in `CartSummary`, using `useReducer`.
