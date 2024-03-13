postOrder(root) {
	if(root) {
		this.postOrder(root.left);
		this.postOrder(root.right);
		console.log(root.value);
	}
}