const prompt = require('prompt-sync')();

function pow(x, n) {
    console.log(x ** n);
}

let x = prompt('Введите число: ');
let n = prompt('Введите степень: ');

if (n > 1)
{
    pow(x, n);
} else {
    console.log('Введите степень больше или равную 1!');
}