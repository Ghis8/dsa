class PriorityQueue{
    constructor(){
        this.items=[]
    }
    enqueue(element,priority){
        let added=false

        for(let i=0;i<this.items.length ; i++){
            if(priority < this.items[i].priority){
                this.items.splice(i,0,{element,priority})
                added=true
                return
            }
        }
        if(!added){
            this.items.push({element,priority})
        }
    }
    toString(){
        return this.items
    }
}

const queue=new PriorityQueue()
queue.enqueue("ghis",1)
queue.enqueue("astrid",3)
queue.enqueue("josline",4)
queue.enqueue("angel",2)

console.log(queue.toString())
