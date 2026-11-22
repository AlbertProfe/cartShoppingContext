export const initialCart = { items: [] };

export function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      const { id, name, price } = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      }
      return {
        items: [...state.items, { id, name, qty: 1, price }],
      };
    }
    case "remove": {
      const { id } = action.payload;
      return {
        items: state.items
          .map((item) =>
            item.id === id ? { ...item, qty: item.qty - 1 } : item
          )
          .filter((item) => item.qty > 0),
      };
    }
    case "clear":
      return { items: [] };
    default:
      return state;
  }
}

export function cartQty(items) {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.qty * item.price, 0);
}
