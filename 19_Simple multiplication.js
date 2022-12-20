function simpleMultiplication(number) {
    return number % 2 == 0 ? number * 8 : number * 9;
}


//эти не мои

function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}


const simpleMultiplication=n=>n*(n%2?9:8)