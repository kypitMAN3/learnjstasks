const prompt = require('prompt-sync')();

function sumInput() {
    let arr = [];

    while (true) {
        let input = prompt('Введите число');

        if (input === null || input === '' || !isFinite(input)) break;

        arr.push(+input);
    }

    let sum = 0;

    for(let num of arr) {
        sum += num;
    }

    console.log(sum);
    return sum;
}

sumInput();