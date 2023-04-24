export default function cleanSet(set, startString) {
// returns a string of all the set values tha start with [startString]
  let str = '';
  if (startString.length) {
    set.forEach((val) => (val.includes(startString) ? str += `-${val.slice(3)}` : ''));
    return str.slice(1);
  }
  return '';
}
