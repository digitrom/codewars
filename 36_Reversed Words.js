function reverseWords(str){
    let splitWords = str.split(" "); // преобразует строку в массив со словами
    let reverseArray = splitWords.reverse() // делает реверс массива
    return str = reverseArray.join(" "); // преобразует массив в строку
}

//то же но короче

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");


