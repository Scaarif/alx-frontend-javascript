export default function hasValuesFromArray(set, array) {
  // returns a boolean value
  return array.every((item) => set.has(item));
}
