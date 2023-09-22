function digitize(n) {
    const arr = String(n).split('').map(str => Number(str)).reverse()
    return arr
}

function digitize(n) {
    const arrOfStr = Array.from(String(number));
    const arrOfNum = arrOfStr.map(str => Number(str));
}

function digitize(n) {
    const arrOfStr = Array.from(String(n));
    const arrOfNum = arrOfStr.map(str => Number(str));
    return arrOfNum.reverse()
}
