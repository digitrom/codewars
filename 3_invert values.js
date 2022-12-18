function invert(array) {
    arr = [];
    for(let i = 0; i < array.length; i++){
        arr.push(array[i]*-1)
    }
    return arr;
}

//стрелочная

const invert = array => array.map(num => -num);