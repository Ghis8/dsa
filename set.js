function djb2Hash(key){
    let hash=5381
    for(let i=0;i<key.length;i++){
        hash= hash * 33 + key.charCodeAt(i)
    }
    return hash % 1013

}



class SetClass{
    constructor(){
        this.items={}
    }
    has(value){
        return this.items.hasOwnProperty(value)
    }
    append(value){
       if(!this.has(value)){
        this.items[value]=value
       }
    //    this.items[value]=value
    }
    delete(value){
        if(this.has(value)){
            delete this.items[value]
            return true
        }
        return false
    }
    clear(){
        this.items={}
    }
    size(){
        return Object.keys(this.items).length
    }
    printSet(){
        return Object.entries(this.items)
    }
    getItems(){
        return this.items
    }
    getValues(){
        return Object.values(this.items)
    }
}

let s=new SetClass()
let p=new SetClass()
s.append(10)
s.append(5)
s.append(15)
s.append(19)
s.append(10)

p.append(5)
p.append(10)
p.append(15)
p.append(50)


// for(let x in s.items){
//     console.log(x)
// }

console.log(union(s,p))

// console.log(s.getValues())
