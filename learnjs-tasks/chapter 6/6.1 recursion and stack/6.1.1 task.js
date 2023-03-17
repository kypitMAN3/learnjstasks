function sumToCycle(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

function sumToRecursion(n) {
    if (n == 1) {
        return 1;
    }

    let sum = 0;
    return n + sumToRecursion(n - 1);
}

function sumToProgress(n) {
    return n * (n + 1) / 2;
}

console.log(sumToCycle(200));
console.log(sumToRecursion(300));
console.log(sumToProgress(400));
