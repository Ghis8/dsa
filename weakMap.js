const items=new WeakMap() // weak map can store a key/value pair, where the key is an object and value can be of any data type

class Stack{
    constructor(){
        items.set(this,[])
    }
    push(element){
        let s=items.get(this)
        s.push(element)
    }
    pop(){
        let s=items.get(this)
        s.pop()
    }
    toString(){
        let s=items.get(this)
        return s
    }
}

let stack =new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
console.log(stack.toString())