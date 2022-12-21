function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }
    return false;
}

let check = (a, x) => a.includes(x);

// прикольно!
function check(a,x){
    return a.indexOf(x) > -1 ? true : false;
};