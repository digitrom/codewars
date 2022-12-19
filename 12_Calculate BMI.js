function bmi(weight, height) {
    let bmi1 = weight/(height * height);
    if (bmi1 <= 18.5) {
        return "Underweight";
    } else if (bmi1 <= 25.0 && bmi1 > 18.5) {
        return "Normal";
    } else if (bmi1 <= 30.0 && bmi1 > 25.0) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}

function bmi(weight, height) {
    let bmi1 = weight/(height * height);
    return bmi1 <= 18.5 ? "Underweight" : bmi1 <= 25.0 ? "Normal": bmi1 <= 30.0 ? "Overweight" : "Obese";
}

function bmi(weight, height) {
    let bmi1 = weight/(height * height);
    return bmi1 <= 18.5 ? "Underweight" : bmi1 <= 25.0 && bmi1 > 18.5 ? "Normal": bmi1 <= 30.0 && bmi1 > 25.0 ? "Overweight" : "Obese";
}
