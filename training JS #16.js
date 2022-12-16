function splitAndMerge(string, separator) {
    let words = string.split(" ");
    let letters = words.split("");
    let newString = letters.join(" ");
    return newString;
}