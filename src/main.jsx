/**
 * main — mounts the shop on the page.
 *
 * Presence: the browser loads index.html, which points at this file.
 * This is outside the cart. It finds #root and renders App. It does
 * not know about items, products, or shipping.
 *
 * Naming: main, because it is the module entry, not a component.
 * StrictMode renders twice in development so a reducer that mutates
 * state is easier to spot. Leave it on while you learn the reducer.
 *
 * Flow in: the DOM node #root.
 * Flow out: <App /> inside StrictMode.
 *
 * 1. TODO: Do not create the cart here. If state starts in this file,
 *          every screen is forced to share it, and the provider no
 *          longer has a clear boundary.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
