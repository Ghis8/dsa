//! NODE
class Node{
    constructor(element){
        this.element=element
        this.next=null
        
    }
}

//! LINKED LIST
class LinkedList{
    constructor(){
        this.head=null 
        this.size=0
    }
    append(element){
        let newNode=new Node(element),current
        if(this.head== null){
            this.head=newNode
        }else{
            current=this.head
            while(current.next){
                current=current.next
            }
            current.next=newNode
        }
        this.size++
    }   
    removeAt(position){
        if(position > -1 && position < this.size){
            let current=this.head,
            previous,
            index=0 
            if(position === 0){
                this.head=current.next
            }else{
             while(index++ < position){
                previous=current 
                current=current.next
             }   
            }
            this.size--
            return current.element
        }else{
            return null
        }
        
    }
    insert(position,element){
        if(position >=0 && position <=this.size){
            let node=new Node(element),current=head,previous,index=0
            if(position === 0){
                node.next=current
                this.head=node 
            }else{
                while (index ++ < position){
                    previous=current 
                    current=current.next
                }
                node.next=current
                previous.next=node
            }
            this.size++
            return true
        }else{
            return false
        }
    }
    toString(){
        let current=this.head, 
        string=''
        while(current){
            string+=current.element + (current.next ? '->':'')
            current=current.next
        }
        return string
    }
    indexOf(element){
        let current=this.head,index=-1
        while(current){
            if(element === current.element){
                return index
            }
            index++
            current=current.next
        }
        return -1
    }
    remove(element){
        let index=this.indexOf(element)
        return this.removeAt(index)
    }
    isEmpty(){
        return this.size === 0
    }
    getHead(){
        return this.head
    }

}

//! DOUBLE LINKED LIST
class DNode{
    constructor(element){
        this.element=this.element
        this.next=null 
        this.prev=null
    }
}

class DoubleLinkedList{
    constructor(){
        this.head=null 
        this.tail=null 
        this.size=0
    }
    insertAt(position,element){
        if(position >=0  && position<=this.size){
            let node=new DNode(element),
            current=this.head,
            previous,
            index=0
            if(position ===0){
                if(!this.head){
                    this.head=node 
                    this.tail=node
                }else{
                    node.next=current
                    current.prev=node 
                    this.head=node
                }
            }else  if(position === this.size){
                current=this.tail 
                current.next=node 
                node.prev=current.next
                this.tail=node
            }else{
                while(index ++ < position){
                    previous=current
                    current=current.next 
                }
                node.next = current 
                previous.next = node
                current.prev = node
                node.prev = previous  
            }
            this.size ++ 
            return true
            
        }else{
            return false
        }
    }
    removeAt(position){
        if(position > -1 && position < this.size){
            let current=this.head,previous,index=0
            
            //remove 
            if(position ==0 ){
                this.head=current.next
                if(this.size ===1){
                    this.tail=null 

                }else{
                    this.head.prev=null
                }
            }else if (position === this.size-1){
                current = this.tail 
                this.tail=current.prev 
                this.tail.next=null
            }else{
                while(index ++ <position){
                    previous=current 
                    current=current.next
                }
                previous.next=current.next 
                current.next.prev=previous
            }
            this.size++
            return current.element

        }else{
            return null
        }
    }
    
}




//! TEST
let list=new LinkedList()

list.append(15)
list.append(10)
list.append(12)
list.append(17)
list.append(22)
list.append(11)

console.log(list.getHead())
