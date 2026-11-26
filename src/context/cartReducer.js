/**
 * cartReducer — turns one action into the next cart.
 *
 * Presence: nothing on screen imports this file. CartProvider holds it
 * and calls it when a component dispatches. The badge and the summary
 * only see the items array that comes back. This is the narrow slice
 * where the cart's rules live, so the rest of the tree can stay broad.
 *
 * Naming: a reducer is (state, action) => next state. initialCart is the
 * cart before any click. An item is one line already in the cart:
 * { id, name, price, qty }. A product has no qty. An action is
 * { type, payload }. The type is the verb: "add", "remove", or "clear".
 *
 * Flow in: current state, plus an action from dispatch.
 * Flow out: a new state object. Same shape as initialCart: { items }.
 *           Do not mutate the state you received. Do not compute tax,
 *           shipping, or the badge number here. Those are derived later.
 *
 * The risky slice is "add" of an id that is already in the cart.
 * Do that case before you touch remove.
 *
 * 1. TODO: From an "add" action, read id, name, and price on the payload.
 * 2. TODO: Look through state.items for a line with that id.
 * 3. TODO: If the line is there, return a new state. Copy that line and
 *          give it qty + 1. Leave every other line as it is.
 * 4. TODO: If the line is not there, return a new state that keeps the
 *          old lines and adds { id, name, price, qty: 1 }.
 * 5. TODO: From a "remove" action, read id. Return a new state where that
 *          line's qty is one lower.
 * 6. TODO: Drop a line whose qty reaches 0. Do not leave a zero line.
 * 7. TODO: "clear" returns a cart with an empty items array.
 */

export const initialCart = { items: [] };

export function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      // TODO 1–4: see the file header. Return the next cart, not `state`,
      // once the two add paths (existing line, new line) are real.
      return state;
    }
    case "remove": {
      // TODO 5–6: lower qty, then drop the line at 0.
      return state;
    }
    case "clear": {
      // TODO 7: empty items.
      return state;
    }
    default:
      return state;
  }
}
