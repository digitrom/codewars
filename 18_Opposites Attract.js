function lovefunc(flower1, flower2) {
    return flower1 % 2 == 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 == 0 ?  true : false
}

function lovefunc(flower1, flower2) {
    if (flower1 % 2 == 0 && flower2 % 2 !== 0) return true;
    else if (flower1 % 2 !== 0 && flower2 % 2 == 0) return true;
    else return false;
}

//ой как легко, но

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}