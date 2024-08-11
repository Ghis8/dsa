function HashTable(){
    let table=[]
    this.put=put 
    this.remove=remove 
    this.get=get
}

let loseloseHashCode=function(key){
    let hash=0
    for(let i=0;i<key.length;i++){
        hash+=key.charCodeAt(i)
    }
    return hash % 37
}

this.put=function(key,value){
    let position=loseloseHashCode(key)
    console.log(position+'-'+key)
    table[position]=value 
}

this.get=(key)=>{
    return table[loseloseHashCode(key)]
}

this.remove=(key)=>{
    table[loseloseHashCode(key)]=undefined
}

let hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');


console.log(hash)