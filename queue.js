function Queue(){
    this.dataSore=[]
    this.enqueue=enqueue
    this.dequeue=dequeue 
    this.front=front 
    this.back=back 
    this.isEmpty=isEmpty 
    this.toString=toString
}

function enqueue(element){
    return this.dataSore.push(element)
}

function dequeue(){
    return this.dataSore.shift()
}

function front(){
    return this.dataSore[0]
}
function back(){
    return this.dataSore[this.dataSore.length-1]
}
function toString(){
    let retStr=''
    for(let char of this.dataSore){
        retStr+=char +'\n'
    }
    return retStr
}

function isEmpty(){
    if(this.dataSore.length == 0){
        return true
    }else{
        return false
    }
}