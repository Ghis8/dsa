class Binary{
    constructor(){
        this.remStack=[]
        this.binaryString=''
    }
    numberToBinary(number){
        let rem
        while(number >0){
            rem=Math.floor(number % 2)
            this.remStack.push(rem)
            number=Math.floor(number /2)

        }
        while(!this.remStack.length == 0){
            this.binaryString+=this.remStack.pop()
            
        }
    }
    toString(){
        return this.binaryString
    }
    
}

let bn10=new Binary()
bn10.numberToBinary(10)
console.log(bn10.toString())