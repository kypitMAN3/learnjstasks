const prompt = require('prompt-sync')();

let number;
do {
    number = prompt('Введите число больше 100');
    if (number < 100)
    {
        console.log('Попробуйте еще раз');
        continue;
    }
} while (number <= 100 && number)

console.log('Вы ввели число больше 100!');