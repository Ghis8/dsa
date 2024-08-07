function baseConverter(number,base){
    let stack=[],rem,baseString=''
    while(number > 0){
        rem=Math.floor(number % base)
        stack.push(rem)
        number=Math.floor(number / base)
    }
    while(!stack.length == 0){
        baseString+=stack.pop()
    }
    return baseString

}

let base16=baseConverter(10,2)
console.log("base",base16)