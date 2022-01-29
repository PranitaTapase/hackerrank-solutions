function timeConversion(s) {
    const p = s.slice(0,8);
    const arr = p.split(':');
    if(s.includes('PM')){
        if(arr[0] == 12) return p;
        else arr[0] = Number(arr[0])+ 12;
        const op = arr.join(':');
        return op;
    }
    else{
        if(arr[0] == 12){
            arr[0] = "00";
            return arr.join(':');
        } 
        return p;
    }
}
