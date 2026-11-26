export const products = [
  { id: "keyboard", name: "Keyboard", price: 49 },
  { id: "mouse", name: "Mouse", price: 25 },
];

export function findProduct(list, productId) {
  return list.find((product) => product.id === productId);
}
