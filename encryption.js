function encryption(s){
    const len=s.split(' ').join('').length
    const rows=Math.floor(Math.sqrt(len))
    const columns=Math.ceil(Math.sqrt(len))
    let output="",point=0

    for(let i=0;i<len;i+=columns){
        point+=columns
        for(let j=0;j<s[i].length;j++){
            output+=s[i][j]
        }
        output+=" "
    }
    console.log("output->",output)
}

console.log(encryption("haveaniceday"))