function animal(obj){
    var newAnimal = {
        name: obj.name,
        legs: obj.legs,
        color: obj.color
    };
    return "This " + newAnimal.color + " " + newAnimal.name + " has " + newAnimal.legs + " legs.";
}
