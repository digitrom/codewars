const removeChar = str => str.slice(1, -1)

function removeChar(str) {
    //You got this!
    let str1 = str.split('');
    str1.shift();
    str1.pop();
    return str1.join('');

};

function removeChar(str){
    return str.substring(1, str.length-1);
};