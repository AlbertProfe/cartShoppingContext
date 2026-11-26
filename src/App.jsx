/**
 * App — the root of the shop.
 *
 * Presence: this is the whole screen, seen broadly before any slice.
 * CartProvider wraps both branches (Header and Main) so they share one
 * cart. The provider is the outermost cart boundary. Above it, in
 * main.jsx, there is only the React root.
 *
 * Naming: App is the root component, not the cart. CartProvider is
 * named for the state it owns. Header and Main are the two branches
 * of the tree, and they take no cart props.
 *
 * Flow in: nothing from a parent. This is the top.
 * Flow out: a provider, then the header branch and the main branch.
 *
 * 1. TODO: Keep CartProvider above both Header and Main. A provider
 *          wrapped around only one of them leaves the other branch
 *          outside the room, and useCart will throw there.
 * 2. TODO: Do not put useReducer in App. The reducer stays behind
 *          CartProvider so the root component does not become the cart.
 */

import { CartProvider } from "./context/CartContext";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Header />
      <Main />
    </CartProvider>
  );
}

export default App;
