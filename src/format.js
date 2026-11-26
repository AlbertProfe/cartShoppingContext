export function formatPrice(amount) {
  const text = Number.isInteger(amount) ? String(amount) : amount.toFixed(2);
  return `${text} €`;
}

export function formatMoney(amount) {
  return `${amount.toFixed(2)} €`;
}
