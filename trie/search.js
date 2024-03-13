search(word) {
	let node = this.root;
	for(let char of word) {
		if(!node.children[char]) {
			return false;
		}
		node = node.children[char];
	}
	return node.isEndOfWord;
}