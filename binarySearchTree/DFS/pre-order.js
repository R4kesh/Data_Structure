preOrder(root){
	if(root) {
		console.log(root.value);
		this.preOrder(root.left);
		this.preOrder(root.right);
	}
}