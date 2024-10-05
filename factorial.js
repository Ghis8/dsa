function factorial(n){
    if (n ==0){
        return 1
    }
    return n*factorial(n-1)
}
// console.log(BigInt(factorial(50)))


module.exports=factorial
