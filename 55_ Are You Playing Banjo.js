function findAverage(array) {
    let sum = 0
    for (let i = 0; i<array.length; ++i) {
        sum += array[i]
    }
    const average = sum / array.length
    return average
}

//=======================================

function findAverage(array) {
    let sum = 0
    if (array.length !=0) {
        array.forEach(el => sum+=el)
        const av = sum / array.length
        return av
    }else{
        return 0
    }

}

//=====================================

function findAverage(array) {
    if (array.length != 0) {
        var sum = array.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        },0)
        const average = sum / array.length
        return average
    }else{
        return 0
    }
}