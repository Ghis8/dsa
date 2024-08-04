let names=["ghislain","angelique","astrid","josline"]

for( let i=0;i<names.length;i++){
    names[i]=names[i+1]
}
names.splice(names.length-1,1)


console.log(names)