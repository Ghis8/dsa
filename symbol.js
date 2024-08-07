let _items=Symbol() // n6 primitive can be used as an object property

class Stack{
    constructor(){
        this[_items]=[]
    }
    push(...element){
        this[_items].push(element)
    }
    pop(){
        this[_items].pop()
    }

}

let stack=new Stack()
let objectSymbols=Object.getOwnPropertySymbols(stack)
stack.push(5)
stack.push(10)
stack.push(4)
stack.pop()
stack.push(1,2,3)

console.log("own Property",objectSymbols[0])
console.log(stack)