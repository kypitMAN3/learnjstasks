const prompt = require('prompt-sync')();

const userName = prompt('Введите логин');

if (userName == 'Admin')
{
    const pass = prompt('Введите пароль');

    if (pass == 'Admin')
    {
        console.log('Здравствуйте!');
    } else if (pass === '' || pass === null) {
        console.log('Отменено');
    } else {
        console.log('Неверный пароль');
    }
} else if (userName === '' || userName === null) {
    console.log('Отменено');
} else {
    console.log('Я вас не знаю');
}