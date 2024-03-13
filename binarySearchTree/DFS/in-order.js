inOrder(root) {
	if(root) {
		this.inOrder(root.left);
		console.log(root.value);
		this.inOrder(root.right);
	}
}