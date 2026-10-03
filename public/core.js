export function isDateOnly(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split('-').map(Number);
  if (year < 1 || month < 1 || month > 12 || day < 1) return false;
  const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= days[month - 1];
}
export function findBefore(items, cutoff) {
  if (!Array.isArray(items)) throw new TypeError('Items must be an array.');
  if (!isDateOnly(cutoff)) throw new RangeError('Cutoff must be a real YYYY-MM-DD date.');
  const result = [];
  const ids = new Set();
  for (const item of items) {
    if (!item || typeof item.id !== 'string' || !item.id.trim() || ids.has(item.id) ||
        typeof item.label !== 'string' || !item.label.trim() || !isDateOnly(item.foundOn)) {
      throw new TypeError('Each item needs a unique ID, label and real foundOn date.');
    }
    ids.add(item.id);
    // Fixed-width valid dates sort chronologically. The cutoff is strictly before.
    if (item.foundOn < cutoff) result.push({ ...item });
  }
  return result;
}
