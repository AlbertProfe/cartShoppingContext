const STORAGE_KEY = "cart.lines";

function isLine(line) {
  return (
    Boolean(line) &&
    typeof line.productId === "string" &&
    Number.isInteger(line.qty) &&
    line.qty > 0
  );
}

export function readStoredLines(storage) {
  const raw = storage.getItem(STORAGE_KEY);
  if (raw === null) return null;
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    return parsed.filter(isLine);
  } catch {
    return null;
  }
}

export function writeStoredLines(storage, lines) {
  storage.setItem(STORAGE_KEY, JSON.stringify(lines));
}
