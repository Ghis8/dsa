function split(target:any,propertyKey:string,descriptor:PropertyDescriptor){
    const originalMethod=descriptor.value 
    descriptor.value=function(...args:any[]){
        const [arg]=args
        const splittedArg=arg.split('')
        originalMethod.apply(this,[splittedArg])
    }
}
function reverse(target:any,propertyKey:string,descriptor:PropertyDescriptor){
    const originalMethod=descriptor.value 
    descriptor.value=function(...args:any[]){
        const [arg]=args
        const splittedArg=arg.reverse()
        originalMethod.apply(this,[splittedArg])
    }
}
function join(char:string){
    return function(target:any,propertyKey:string,descriptor:PropertyDescriptor){
        const originalMethod=descriptor.value 
        descriptor.value=function(...args:any[]){
            const [arg]=args
            const splittedArg=arg.join(char)
            originalMethod.apply(this,[splittedArg])
        }
    }
}



class StringManager{
    @split
    @reverse
    @join('_')
    print(str:string){
        console.log(str)
    }
}

const stringManger=new StringManager()

stringManger.print("hello")