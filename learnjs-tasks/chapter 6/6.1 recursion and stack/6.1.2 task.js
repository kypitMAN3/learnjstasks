function factorial(n) {
    if (n) {
        return n * factorial(n-1);
    }

    return 1;
}

console.log(factorial(4));