function howManySmaller(arr,n){
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toFixed(2) < n)
            total++;
    }
    return total;
}