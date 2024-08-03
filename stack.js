function Stack(){
    this.dataStore=[]
    this.top=0
    this.push=push 
    this.pop=pop 
    this.peek=peek 
    this.length=length
}


function push(element){
    return this.dataStore[this.top++]=element
}
function pop(){
    return this.dataStore[--this.top]
}
function peek(){
    return this.dataStore[this.top -1]
}
function toString(){
    return this.dataStore
}
function length(){
    return this.top
}


function mulBase(num,base){
    let s=new Stack()
    do{
        s.push(num%base)
        num=Math.floor(num /=base)
    }while(num >0)
        let converted=""
        while(s.length() >0){
            converted+=s.pop()
        }
        return converted
    
}

let num=32
let base=2
let newNum=mulBase(num,base)
console.log(`${num} converted to base ${base} is ${newNum}`)