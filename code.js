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
    if(n === 0) return 1;
    else sum = 1.0;
    for(i = 1; i <= n; i++) {
        sum += 1.0 / factorial(i);
    }
    return sum;
}
