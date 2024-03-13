class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.head = null;
    }
  
    isEmpty() {
      return this.head === null;
    }
  
    enqueue(value) {
      let node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = node;
      }
    }
  
    dequeue() {
      let deleteNode = this.head;
      this.head = deleteNode.next;
      return deleteNode;
    }
  
    print() {
      let curr = this.head;
      while (curr) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  }
  
  let que = new Queue();
  que.enqueue(10);
  que.enqueue(20);
  que.enqueue(30);
  que.enqueue(40);
  que.enqueue(50);
  
  que.dequeue();
  que.print();