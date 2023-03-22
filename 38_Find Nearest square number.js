function nearestSq(n){
    if (Number.isInteger(Math.sqrt(n))) {
        return n
    } else {
        return Math.pow(Math.round(Math.sqrt(n)), 2)
    }
}

console.log(nearestSq(122))