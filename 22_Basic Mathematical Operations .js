function basicOp(operation, value1, value2) {
    return operation === "+" ? value1 + value2 : operation === "-" ? value1 - value2 : operation === "*" ? value1 * value2 : operation === "/" ? value1 / value2 : undefined
}


function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}