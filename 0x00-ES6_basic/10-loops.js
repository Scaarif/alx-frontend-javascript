export default function appendToEachArrayValue(array, appendString) {
  for (const idx of Object.keys(array)) {
    const value = array[idx];
    array[idx] = appendString + value;
  }
  return array;
}
