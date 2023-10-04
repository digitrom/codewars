function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1){
        return [];
    }
    var sum =0;
    var pos =[];

    for (var i=0; i<input.length; i++){

        if(input[i]>0){
            pos.push(input[i]);

        } else{
            sum += input[i];

        }
    }
    return [pos.length, sum];
}

//========================================

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return [];
    var sum = 0, count = 0;
    input.forEach(function(el){ if (el > 0) count++; else sum+=el});
    return [count, sum];
}