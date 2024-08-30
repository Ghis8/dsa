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
        let current=head, 
        string=''
        while(current){
            string+=current.element + (current.next ? 'n':'')
            current=current.next
        }
        return string
    }
}

class DoubleLinkedList{
    constructor(){
        this.head=null 
        this.tail=null 
        this.size=0
    }
}

