min(root) {
	if(!root.left) {
		return root.value;
	} else {
		this.min(root.left);
	}
}