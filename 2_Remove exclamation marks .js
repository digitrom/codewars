function removeExclamationMarks(s) {
    return s.replace(/!/g,"") ;
}

//вариант 2
function removeExclamationMarks(s) {
    return s.split('!').join('');
}