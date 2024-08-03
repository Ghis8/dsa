function reader(file, callback) {
    const fr = new FileReader();
    fr.onload = () => callback(null, fr.result);
    fr.onerror = (err) => callback(err);
    fr.readAsDataURL(file);
}

reader('./constants/films.txt',(err,res)=>{
    console.log("result->",res)
})