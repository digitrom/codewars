function maps(x){
    return x.map(n => n * 2);
}
//--------------------------------
function maps(x){
    let arr = [];
    for(let i = 0; i < x.length; i++){
        arr.push(x[i] * 2);
    }
    return arr;
}