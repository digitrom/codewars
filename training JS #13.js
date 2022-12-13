/*
мой первый правильный вариант не прокатил, так как switch строго приравнивает (===), а при строгом сравнении NaN === всегда
false
 */
function whatNumberIsIt(n){
    switch (n) {
        case Number.MAX_VALUE:
            return "Input number is Number.MAX_VALUE";
            break;
        case Number.MIN_VALUE:
            return "Input number is Number.MIN_VALUE";
            break;
        case isNaN(n):
            return "Input number is Number.NaN";
            break;
        case Number.NEGATIVE_INFINITY:
            return "Input number is Number.NEGATIVE_INFINITY";
            break;
        case Number.POSITIVE_INFINITY:
            return "Input number is Number.POSITIVE_INFINITY";
            break;
        default: return "Input number is " + n;
    }
}

function whatNumberIsIt(n){
    if(n === Number.MAX_VALUE) {
        return "Input number is Number.MAX_VALUE";
    }
    if(n === Number.MIN_VALUE) {
        return "Input number is Number.MIN_VALUE";
    }
    if(isNaN(n)) {
        return "Input number is Number.NaN";
    }
    if(n === Number.NEGATIVE_INFINITY) {
        return "Input number is Number.NEGATIVE_INFINITY";
    }
    if(n === Number.POSITIVE_INFINITY) {
        return "Input number is Number.POSITIVE_INFINITY";
    } else {
        return "Input number is " + n;
    }
}

// а вот правильный вариант со switch

}function whatNumberIsIt(n){
    switch (true) {
        case (n===Number.MAX_VALUE):
            return "Input number is Number.MAX_VALUE";
        case (n===Number.MIN_VALUE):
            return "Input number is Number.MIN_VALUE";
        case (isNaN(n)):
            return "Input number is Number.NaN";
        case (n===Number.NEGATIVE_INFINITY):
            return "Input number is Number.NEGATIVE_INFINITY";
        case (n===Number.POSITIVE_INFINITY):
            return "Input number is Number.POSITIVE_INFINITY";
        default: return "Input number is " + n;
    }
}