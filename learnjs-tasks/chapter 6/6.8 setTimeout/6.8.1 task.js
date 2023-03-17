function printNumbersInterval(from, to) {
    let cur = from;

    let timer = setInterval(function() {
        console.log(cur);
        if (cur == to) {
            clearInterval(timer);
        }

        cur++;
    }, 1000)
}

function printNumbersTimeout(from, to) {
    let cur = from;

    setTimeout(function f() {
        console.log(cur);

        if (cur < to) {
            setTimeout(f, 1000);
        }

        cur++;
    }, 1000)
}

printNumbersInterval(2, 10);
printNumbersTimeout(-2, 1);