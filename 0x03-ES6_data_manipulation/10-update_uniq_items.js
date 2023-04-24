export default function updateUniqueItems(map) {
  // returns an updated map (all values == 1 are updated to 100)
  try { return map.forEach((val, key) => (val === 1 ? map.set(key, 100) : '')); } catch (err) { throw new Error('Cannot process'); }
}
