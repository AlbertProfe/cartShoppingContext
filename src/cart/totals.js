export const TAX_RATE = 0.21;

export function roundMoney(amount) {
  return Math.round((amount + Number.EPSILON) * 100) / 100;
}

export function sumQty(lines) {
  return lines.reduce((sum, line) => sum + line.qty, 0);
}

export function deriveTotals(lines, products, shippingPrice) {
  const units = sumQty(lines);
  const subtotal = roundMoney(
    lines.reduce((sum, line) => {
      const product = products.find((product) => product.id === line.productId);
      if (!product) {
        throw new Error(`No product for ${line.productId}`);
      }
      return sum + product.price * line.qty;
    }, 0),
  );
  const tax = roundMoney(subtotal * TAX_RATE);
  const shipping = lines.length === 0 ? 0 : shippingPrice;
  const total = roundMoney(subtotal + tax + shipping);
  return { units, subtotal, tax, shipping, total };
}
