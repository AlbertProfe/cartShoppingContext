export const initialCart = {
  lines: [{ productId: "mouse", qty: 1 }],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      const { productId } = action;
      const existing = state.lines.find((line) => line.productId === productId);
      if (existing) {
        return {
          lines: state.lines.map((line) =>
            line.productId === productId ? { ...line, qty: line.qty + 1 } : line,
          ),
        };
      }
      return { lines: [...state.lines, { productId, qty: 1 }] };
    }
    case "remove": {
      const { productId } = action;
      return {
        lines: state.lines
          .map((line) =>
            line.productId === productId ? { ...line, qty: line.qty - 1 } : line,
          )
          .filter((line) => line.qty > 0),
      };
    }
    case "clear":
      return { lines: [] };
    default:
      return state;
  }
}
