function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    
    var factorial = 2;
    var marker = factorial + 1;

    while(marker <= n) {
        factorial = factorial * marker;
        marker++;
    }
    return factorial;
}

function e(n) {
    let euler = 1.0;
    let factorial = 1.0;

    if(n < 0) return null;
    if(n === 0) return euler;

    for(i = 1; i <= n; i++) {
        euler += (1.0 / (factorial *= i));
    }
    return euler;
}
