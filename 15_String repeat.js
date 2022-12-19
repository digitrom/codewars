function repeatStr (n, s) {
    let str = "";
    for ( let i = 1; i <= n; i++) {
        str += s;
    }
    return str;
}

function repeatStr (n, s) {
    return s.repeat(n);
}

let repeatStr = (n, s) => s.repeat(n);