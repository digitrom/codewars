function splitAndMerge(string,separator){
    return string.split(" ").map(element => element.split("").join(separator)).join(" ");
}


//еще 1 вариант
function splitAndMerge(str,sp){
    var words = str.split(" ");
    var arr =[];
    var res = []
    for(i=0;i<words.length;i++){
        arr.push(words[i].split("").join(sp));
    }
    res = arr.join(" ");
    return res;

}