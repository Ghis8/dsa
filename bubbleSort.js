class List{
    constructor(){
        this.items=[]
    }
    add(items){
        return this.items.push(...items)
    }
    toString(){
        console.log(this.items.join(''))
    }
    swap(index1,index2){
        let aux=this.items[index1]
        this.items[index1]=this.items[index2]
        this.items[index2]=aux
    }
    bubbleSort(){
        let length=this.items.length
        for(let i=0;i<length;++i){
            for(let j=0;j<length-1;++j){
                if(this.items[j] > this.items[j+1]){
                    this.swap(j,j+1)
                }
            }
        }
    }
    modifiedBubbleSort(){
        let len=this.items.length
        for(let i=0;i<len;++i){
            for(let j=0;j<len-1-i;++j){
                if(this.items[j] > this.items[j+1]){
                    this.swap(j,j+1)
                }
            }
        }
    }

    selectionSort(){
        let length=this.items.length,indexMin
        for (let i=0;i<length-1;++i){
            indexMin=1
            for(let j=1;j<length;++j){
                if(this.items[indexMin] > this.items[j]){
                    indexMin=j
                }
            }
            if(i !==indexMin){
                this.swap(i,indexMin)
            }
        }

    }
}


function createNonSortedArray(size){
    let arr=new List()
    for(let i=size; i > 0;--i){
        arr.add(i)
    }
    return arr
}

const newList=new List()

newList.add([1,2,4,5])
newList.add([9,3,6,7])

newList.toString()