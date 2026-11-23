// ---------- Constantes ----------
export const TAX_RATE = 0.21; // IVA 21 %

export const SHIPPING = {
  pickup: { label: "Store pickup", price: 0 },
  standard: { label: "Standard (3–5 days)", price: 4.95 },
  express: { label: "Express (24 h)", price: 9.95 },
};

// ---------- Estado inicial + reducer ----------
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

// ---------- Funciones puras de cálculo ----------
export function cartQty(items) {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function cartSubtotal(items) {
  return items.reduce((sum, item) => sum + item.qty * item.price, 0);
}

// Devuelve el desglose completo. Con el carrito vacío no se cobra envío.
export function cartBreakdown(items, shippingKey) {
  const subtotal = cartSubtotal(items);
  const taxes = subtotal * TAX_RATE;
  const shippingPrice = items.length === 0 ? 0 : SHIPPING[shippingKey].price;
  const total = subtotal + taxes + shippingPrice;
  return { subtotal, taxes, shippingPrice, total };
}
