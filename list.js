function List(){
    this.pos=0
    this.listSize=0
    this.insert=insert
    this.dataStore=[]
    this.clear=clear 
    this.find=find 
    this.toString=toString 
    this.append=append 
    this.remove=remove 
    this.front=front 
    this.end=end
    this.next=next 
    this.prev=prev 
    this.length=length 
    this.currPos=currPos 
    this.moveTo=moveTo 
    this.getElement=getElement 
    this.contains=this.contains 
}

function append(element){
    return this.dataStore[this.listSize++]=element
}

function find(element){
    for(let i=0;i<this.dataStore.length;++i){
        if(this.dataStore[i]==element){
            return i
        }
    }
    return -1
}

function remove(element){
    let foundAt=this.find(element)
    if(foundAt > -1){
        this.dataStore.splice(foundAt,1)
        --this.listSize
        return true
    }
    return false
}
 
function length(){
    return this.listSize
}

function toString(){
    return this.dataStore
}

function currPos(){
    return this.pos
}

function insert(element,after){
    let inserPos=this.find(after)
    if(inserPos >-1){
        this.dataStore.splice(inserPos,0,element)
        ++this.listSize
        return true
    }else{
        return false
    }
}
function clear(){
    delete this.dataStore
    this.dataStore=[]
    this.listSize=this.pos=0
}
function front(){
    this.pos=0

}
function end(){
    this.pos=this.listSize -1
}
function next(){
    if(this.pos< this.listSize -1){
        ++this.pos
    }
}
function prev(){
    if(this.pos >0){
        --this.pos
    }
}

function moveTo(position){
    this.pos=position
}

function getElement(){
    return this.dataStore[this.pos]
}
function contains(element){
    for(let i=0;i<this.dataStore.length;++i){
        if(this.dataStore[i] == element){
            return true
        }
    }
    return false
}

//test our list class
const names=new List()
names.append("ghislain")
names.append("angelique")
names.append('astrid')
names.append("josline")
names.remove("josline")
names.front()
names.next()

for(names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement())
}

