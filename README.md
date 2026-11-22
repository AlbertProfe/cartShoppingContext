# Cart Shopping Context

Labs [RE08-1](https://albertprofe.dev/reactjs/rjslab8-1.html) and [RE08-2](https://albertprofe.dev/reactjs/rjslab8-2.html) on [albertprofe.dev](https://albertprofe.dev). A small React shop that shows how **context** shares state across two branches of the tree, with no prop drilling.

In **v0.1**, `CartProvider` owns a `count` with `useState`. In **v0.2**, the cart is an array of `{id, name, qty, price}`, managed with `useReducer`. `CartBadge` (in the header) and `Product` / `CartSummary` (in the main column) still share that state through the `useCart` hook. They have no props in common.

## Run it

```bash
npm install
npm run dev
```

## What is in this repo

- **v0.0** — Vite + React scaffold
- **v0.1** — the cart context lab, with one folder per component and a `count` in `useState`
- **v0.2** — cart items as an array, with `useReducer`

```
src/
  App.jsx
  main.jsx
  context/CartContext.jsx    # createContext + CartProvider
  context/cartReducer.js     # add, remove, clear (v0.2)
  hooks/useCart.js
  Header/Header.jsx
  CartBadge/CartBadge.jsx
  Main/Main.jsx
  ProductList/ProductList.jsx
  Product/Product.jsx
  CartSummary/CartSummary.jsx
```

The shop lists two products, Keyboard (49 €) and Mouse (25 €).

## What to notice

- `Product` and `CartBadge` sit in different branches. Clicking **Add to cart** still updates the badge in the header.
- Without context, you would lift the cart into `App` and pass it down through `Main`, `ProductList`, `Header`, and so on (prop drilling).
- Every consumer re-renders when the context value changes. That is fine here, and it is why bigger apps split contexts (for example `CartContext` and `ThemeContext`).
- In v0.2, one `dispatch` replaces `setCount`. The reducer is a pure function: it never mutates `state`, it returns a new one.

## Next features (not in this version)

- A theme toggle (dark / light) read by many components.
- A logged-in user shown in the navbar and used by a profile page.
