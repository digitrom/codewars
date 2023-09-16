function squareSum(numbers){
    let sum = 0
    for(let i = 0; i< numbers.length; ++i){
        sum += numbers[i]*numbers[i]
    }
    return sum
}
//==================================

function squareSum(numbers){
    let sum = 0
    for(let i = 0; i< numbers.length; ++i){
        sum += Math.pow(numbers[i],2)
    }
    return sum
}
//=====================================

function squareSum(numbers) {
let sum = 0
    numbers.forEach(function (el){
    sum+=el*el
})
}
