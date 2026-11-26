/**
 * Product — one row on the shelf.
 *
 * Presence: ProductList renders one Product per catalog row, inside Main.
 * This row does not know the header exists. It does not know the badge.
 * Clicking Add still changes the badge, because both share the cart room,
 * not because this file reaches across the tree.
 *
 * Naming: props are a product: id, name, price. There is no qty prop.
 * Qty is born inside the reducer when the product becomes an item.
 * handleAdd names the click. The action type "add" is the same verb
 * the reducer switches on. If you rename one, rename the other.
 *
 * Flow in: { id, name, price } from ProductList.
 * Flow out: dispatch({ type: "add", payload: { id, name, price } }).
 *           Nothing comes back to this row except the next render of
 *           the whole tree, which this row does not need to read.
 *
 * 1. TODO: Keep the payload to id, name, and price. Do not send qty.
 * 2. TODO: Do not call setState here and do not import the reducer.
 *          The row asks. cartReducer decides what "add" means.
 * 3. TODO: At Return, tap Add twice on Keyboard. The sketch says one
 *          line with qty 2, and the header number goes up by 2.
 */

import { useCart } from "../hooks/useCart";

export function Product({ id, name, price }) {
  const { dispatch } = useCart();

  function handleAdd() {
    dispatch({
      type: "add",
      payload: { id, name, price },
    });
  }

  return (
    <li>
      <span>
        {name} — {price} €
      </span>
      <button type="button" onClick={handleAdd}>
        Add to cart
      </button>
    </li>
  );
}
