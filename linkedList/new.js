class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Linkedlist{
    constructor(){
        this.head=null;
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }

    displayall(){
        if(this.isEmpty()){
            console.log('empty');
        }else{
            let curr=this.head
            while(curr){
                console.log(curr.value)
                curr=curr.next
            }
        }
    }

    prepend(value){
        const node=new Node(value)
        if(!this.isEmpty()){
         node.next=this.head;   
        }
        this.head=node
        this.size++
        
    }
}

const list=new Linkedlist()
list.prepend(40)
list.prepend(41)
list.displayall()
