/**
 * shipping — the delivery choices on the cart screen.
 *
 * Presence: shipping is part of the price the shopper sees in CartSummary.
 * It is not part of the shared cart. The badge counts units and never
 * reads this file. Two components that do not share the choice should
 * not find it in context.
 *
 * Naming: SHIPPING is the table of methods. A method has a label and a
 * price. The selected key (for example "standard") is another variable,
 * shippingMethod, and it lives in CartSummary with useState.
 *
 * Flow in: none. This module is a fixture.
 * Flow out: SHIPPING, read when CartSummary renders the <select> and,
 *           once you finish the TODOs there, when it adds a price to the total.
 *
 * 1. TODO: Confirm the three keys: pickup (0), standard (4.95), express (9.95).
 * 2. TODO: Do not copy these prices into cart state. Read them from here.
 */

export const SHIPPING = {
  pickup: { label: "Store pickup", price: 0 },
  standard: { label: "Standard (3–5 days)", price: 4.95 },
  express: { label: "Express (24 h)", price: 9.95 },
};
