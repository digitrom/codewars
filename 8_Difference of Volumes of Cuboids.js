function findDifference(a, b) {
    return a[0]*a[1]*a[2] < b[0]*b[1]*b[2] ? b[0]*b[1]*b[2] - a[0]*a[1]*a[2] : a[0]*a[1]*a[2] - b[0]*b[1]*b[2];
}

// Math.abs

function find_difference(a, b) {
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
}