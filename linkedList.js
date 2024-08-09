class Node{
    constructor(element){
        this.element=element
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null 
        this.size=0
    }
    append(element){
        let newNode=new Node(element)
        if(this.head== null){
            this.head=newNode
        }else{
            let current=this.head
            //traverse the list
            while(current.next){
                current=current.next
            }
            // set the next pointer to  the last node
            current=newNode
        }

        this.size++
    }   
    printList(){
        let current=this.head 
        let nodes=[]
        while(current){
            nodes.push(current.element)
            current=current.next 
        }
        console.log(nodes.join('->'))
    }
}

class DoubleLinkedList{
    constructor(){
        this.head=null 
        this.tail=null 
        this.size=0
    }
}

// let linkedList=new LinkedList()

// linkedList.append(10)
// linkedList.append(15)
// linkedList.append(30)
// linkedList.append(25)

// linkedList.printList()