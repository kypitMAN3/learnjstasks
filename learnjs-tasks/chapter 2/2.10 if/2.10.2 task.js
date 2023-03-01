const prompt = require('prompt-sync')();

const number = prompt('Введите число');

if (number < 0)
{
    console.log('Меньше нуля');
} else if (number == 0) {
    console.log('Равно нулю');
} else {
    console.log('Больше нуля');
}