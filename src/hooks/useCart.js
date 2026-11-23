import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// API del carrito:
//   items, addItem(product), removeItem(id), clearCart()
//   shipping, setShipping(key)
//   subtotal, taxes, shippingPrice, total
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return context;
}
