function powersOfTwo(n){
    arr=[]
    for ( let i = 0; i <=n; i++ ) {
        arr[i] = 2**i;
    }
    return arr;
}