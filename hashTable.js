//best hash function to avoid collision is djb2 funcion 

function djb2HashCode(key){
    let hash=5381
    for(let i=0;i<key.length;i++){
        hash=hash* 33 + key.charCodeAt(i)

    }
    return hash % 1013
}

class HashTable{
    constructor(){
        this.table={}
    }
    put(key,value){
        let position=djb2HashCode(key)
        if(!this.table.hasOwnProperty(position)){
            this.table[position]=value 
            return true
        }
        return false
    }
    remove(key){
        let position=djb2HashCode(key)
        delete this.table[position]
    }
    get(key){
        let position=djb2HashCode(key)
        return this.table[position]
    }
    size(){
        return Object.keys(this.table).length
    }
    print(){
        return this.table
    }
}

let hashTable=new HashTable()

hashTable.put("ghis","ghislainkongolo0@gmail.com")
hashTable.put("walker","walkerghis@gmail.com")
hashTable.put("ghis","ghislainkongolo0@gmail.com")
hashTable.put("josline","josline0@gmail.com")

hashTable.remove('josline')


let result=hashTable.print()
let sizeOfHashTable=hashTable.size()



console.log("hashTable->",result)
console.log("size of hashTable->",sizeOfHashTable)