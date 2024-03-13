class Stack{
	constroctor() {
		this.items = [];
	}
	
	push(value) {
		this.items.push(value);
	}
	
	pop() {
		return this.items.pop();
	}
	
	isEmpty() {
		return this.length === 0;
	}
	
	// Doesn't pop the data instead just returns; 
	peek() {
		return this.items[items.length - 1];
	}

	size() {
		return this.items.length;
	}

	print() {
		if(this.isEmpty()){
			console.log("Stack is Empty");
		} else {
			console.log(this.items.toString());
		}
	} 	
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.pop();
console.log(stack.isEmpty());
console.log(stack.size());
stack.print();