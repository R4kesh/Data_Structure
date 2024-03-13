let array = [3, 5, 2, 6, 1, 4];
for(let i = 0; i < array.length; i++) {
	for(let j = 0; j < arra.length; j++) {
		if(i != j && array[i] < array[j]) {
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
}