function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    var arr =[];
    for (let i = 0; i < birds.length; i++) {
        if (birds[i] === "African" || birds[i] === "Roman Tufted" || birds[i] === "Toulouse" || birds[i] === "Pilgrim" ||  birds[i] === "Steinbacher")
            continue;
        arr.push(birds[i]);
    }
    return arr;
};

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter( bird => !geese.includes(bird) );
};