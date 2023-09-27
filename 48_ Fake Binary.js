function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join(''); }

//---------------------------------


function fakeBin(x){
    let result = '';
    for(let i = 0; i < x.length; i++){ x[i] < 5 ? result += 0 : result += 1;
    }
    return result; }