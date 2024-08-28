function timeConversion(s) {
    // Write your code here
    
    if (s.slice(s.length-2,s.length) == "PM"){
        let hours=s.slice(0,2)
        if (Number(hours) < 12){
            return String(Number(hours)+12) + s.slice(2,s.length-2)
        }
        else{
            return s.slice(0,s.length-2)
        }
    }else{
        let hours=s.slice(0,2)
        if (Number(hours) < 12){
            return s.slice(0,s.length-2)
        }
        else{
            return "00"+s.slice(2,s.length-2)
        }
    }

}


console.log(timeConversion("01:12:00AM"))