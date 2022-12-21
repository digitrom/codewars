function oddCount(n){
    const arr = [];
    for (let i = 1; i < n; i+=2) {
        arr.push(i);
    }
    return arr.length;
}

function oddCount(n){
    const newArr = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            newArr.push(i);
        }
    }
    return newArr.length;
}

function oddCount(n){
    const newArr = [];
    for (let i = 0; i < n; i++) {
        if (i % 2) {
            newArr.push(i);
        }
    }
    return newArr.length;
}

let oddCount = n => Math.floor(n / 2);