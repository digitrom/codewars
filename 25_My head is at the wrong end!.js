let fixTheMeerkat = arr => arr.reverse();

function fixTheMeerkat(arr) {
    fixedArr = [];
    for (i = arr.length - 1; i >= 0; i--) {
        fixedArr.push(arr[i]);
    }
    return fixedArr;
}

//не я, но тоже легко

function fixTheMeerkat(arr) {
    return [arr[2], arr[1], arr[0]];
}