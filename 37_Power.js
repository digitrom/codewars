function numberToPower(number, power){
    console.info(Math.log2(1024));
    let result = 1;
    // multiply result by x n times in the loop
    for (let i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}
