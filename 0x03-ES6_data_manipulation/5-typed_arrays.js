export default function createInt8TypedArray(length, position, value) {
  // returns a new ArrayBuffer with an Int8 value at a specific position
  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer);
  try { int8[position] = value; } catch (error) { throw new Error('Position outside range'); }
  return buffer;
}
