function alienLanguage(str){

    let words = str.toUpperCase().split(" ");
    for (i = 0; i < words.length; i++) {
        words[i] =  words[i].slice(0,-1) + words[i].slice(-1).toLowerCase();
    }
    return words.join(" ");
}