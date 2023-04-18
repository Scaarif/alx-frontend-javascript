export default function appendToEachArrayValue(array, appendString) {
	for (let idx of Object.keys(array)) {
		let value = array[idx];
		// console.log(idx, value)
		array[idx] = appendString + value;
	}
	return array;
}
