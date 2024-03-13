let nums = [2, 1, 4, 5, 3, 6];

function sort(array) {
	if(array.length < 2) return array;

	let pivot = array[0];
	let right = [];
	let left = [];
	for(let i = 0; i < array.length; i++) {
		if(array[i] < pivot) {
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}

	return [...sort(left), pivot, ...sort(right)];
}