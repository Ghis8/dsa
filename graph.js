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

class Graph{
    constructor(){
        this.vertices=[]
        this.adjList=new Dict()   
    }
    addVertex(v){
        this.vertices.push(v)
        this.adjList.set(v,[])
    }
    addEdges(v,w){
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }
}