function isPalindrome(word){
    let stack=[]
    for(let char of word){
        stack.push(char)
    }
    let lastWord=""
    while(stack.length > 0){
        lastWord+=stack.pop()
    }
    if(lastWord === word){
        return true
    }else{
        return false
    }
    
}

console.log(isPalindrome("papa"))