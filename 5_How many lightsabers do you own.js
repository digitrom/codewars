function howManyLightsabersDoYouOwn(name) {
    return name === "Zach" ? 18 : 0;
}

var howManyLightsabersDoYouOwn = function(name){
    if (name === "Zach"){
        return 18;
    } else {
        return 0;
    }
}

let howManyLightsabersDoYouOwn = name => name == "Zach" ? 18 : 0;