class Dict{
    constructor(){
        this.items={}
    }
    has(key){
        if(!key in this.items){
            return false 
        }
        return true
    }
    set(key,value){
        if(!this.has(key)){
            this.items[key]=value
        }
    }
    values(){
        let value=[]
        for(let key in this.items){
            if(this.has(key)){
                value.push(this.items[key])
            }
        }
        return value
    }
    getItems(){
        return this.items
    }
}

let dictionary=new Dict()

dictionary.set("Ghis","ghislainkongolo0@gmail.com")
dictionary.set("walker","walkerghis0@gmail.com")
// dictionary.set("Ghis","ghislainkongolo0@gmail.com")
dictionary.set("jos","joslinekongolo0@gmail.com")

console.log(dictionary.values())
