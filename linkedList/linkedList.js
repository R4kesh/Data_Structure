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
      // Big-O: O(n)

      prepend(value) {
        const node = new Node(value);
        if (!this.isEmpty()) {
          node.next = this.head;
        }
        this.head = node;
        this.size++;
      }
      // Big-O: O(1)

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
        if(this.head.value === value) {
            this.head = this.head.next;
        } else {
            let curr = this.head;
            let deleteNo;
            while(curr.next) {
                if(curr.next.value === value) {
                    deleteNo = curr.next;
                    break;
                }
                curr = curr.next;
            }
            curr.next = deleteNo.next;
        }
        this.size--;
    }
    // Big-O: O(n)


    

  }
  
  const list = new LinkedList(); 