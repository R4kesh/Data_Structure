max(root) {
	if(!root.right) {
		return root.value;
	} else {
		this.max(root.right);
	}
}