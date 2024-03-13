insert(word) {
	let curr = this.root;
	for(let char of word) {
		if(!curr.children[char]) {
			curr.children[char] = new TrieNode ();
		}
		curr = curr.children[char];
	}
	curr.isEndOfWord = true;
}