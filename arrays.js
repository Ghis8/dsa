// const names=new Array("ghislain","angelique","astrid",'josline')

// for(let i=names.length+2;i>=0;i--){
//     names[i]=names[i-3]
// }
// names[0]="CEO"
// names[1]="CTO"
// names[2]="CDO"
// console.log(names)


// adding elements at the begining of a given array
function addElementAtTheBegining(arr,...args){
    for(let i=arr.length + args.length-1;i>=0;i--){
        arr[i]=arr[i-args.length]
    }
    for(let j=0;j< args.length;j++){
        arr[j]=args[j]
    }
    return arr
}

// alternative way to addElements at the begining of a given array using spread operator
function addElements(arr,...args){
    return [...args,...arr]
}

//console.log(addElementAtTheBegining([1,2],4,5,6)) // [ 4, 5, 6, 1, 2 ]
//console.log(addElements([1,2,3],4,5,6,7,8)) // [4, 5, 6, 7, 8, 1, 2, 3]

function removeFirstElement(arr){
    for(let i=0;i<arr.length;++i){
        arr[i]=arr[i+1]
    }
    return arr
}

// this function concatenate string from a given array from right to left
function reduceRightString(arr){
    let newArr=""
    for(let i=arr.length -1 ;i>=0;i--){
        newArr+=arr[i]+" "
    }
    return newArr.trim()
}

// forEach does not return a new array
// console.log([1,2,3,4].forEach((item)=>{
//     console.log(item*2)
// }))
// console.log(reduceRightString(["the ", "quick ","brown ", "fox "]))
// console.log(removeFirstElement([1,2,3,4,5,6]))

Array.matrix=(numRows,numCols,initial)=>{
    let arr=[]
    for (let i=0;i<numRows;i++){
        let columns=[]
        for (let j=0;j<numCols;i++){
            columns[j]=initial
        }
        arr[i]=columns

    }
    return arr
}