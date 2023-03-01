const prompt = require('prompt-sync')();

const age = prompt('Напишет свой возраст');

if (!(age >= 14 && age <= 90))
{
    console.log('Ваш возраст подходит.');
} else {
    console.log('Неподходящий возраст.');
}