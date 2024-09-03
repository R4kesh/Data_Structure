class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }

    displayAll() {
        if (this.isEmpty()) {
          console.log("List is empty");
        } else {
          let curr = this.head;
          while (curr) {
            console.log(curr.value);
            curr = curr.next;
          }
        }
      }
      // Big-O : O(n)

      prepend(value) {
        const node = new Node(value);
        if (!this.isEmpty()) {
          node.next = this.head;
        }
        this.head = node;
        this.size++;
      }
      // Big-O : O(1)

      append(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }
    // Big-O: O(n)

    //Delete node with index
    deleteNode(index) {
        if(index < 0 || index > this.size) {
            console.log("Invalid Index");
            return;
        }
    
        if(index === 0) {
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            let deleteNode = prev.next;
            prev.next = deleteNode.next;
        }
        this.size--;
    }
    // Big-O: O(n)

    //Delete node with value

    deleteNode(value) {
      if (this.isEmpty()) {
          console.log("List is empty");
          return;
      }
  
      // Case 1: Deleting the head node
      if (this.head.value === value) {
          this.head = this.head.next;
          this.size--;
          return;
      }
  
      // Case 2: Deleting any other node
      let curr = this.head;
      let prev = null;
  
      while (curr) {
          if (curr.value === value) {
              prev.next = curr.next;
              this.size--;
              return;
          }
          prev = curr;
          curr = curr.next;
      }
  
      // If the value was not found
      console.log("Value not found in the list");
  }
    // Big-O: O(n)

    

    isPalindrome() {
      if (!this.head || !this.head.next) {
        return true;
      }
  
      let slow = this.head;
      let fast = this.head;
  
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
  
      let reversedSecondHalf = this.reverseLinkedList(slow);
  
      while (reversedSecondHalf) {
        if (this.head.value !== reversedSecondHalf.value) {
          return false;
        }
        this.head = this.head.next;
        reversedSecondHalf = reversedSecondHalf.next;
      }
  
      return true;
    }
  
    reverseLinkedList(head) {
      let prev = null;
      let current = head;
  
      while (current) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
      }
  
      return prev;
    }


    

  }
  
  const list = new LinkedList(); 