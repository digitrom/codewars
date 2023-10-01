function isDivisible(n, x, y) {
    return Number.isInteger(n/x) && Number.isInteger(n/y) ? true : false
}

//==========================
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}

//===============================

function isDivisible(n, x, y) {
    if (Number.isInteger(n/x) && Number.isInteger(n/y)) {
        return true
    }
    return false
}