function camelize(str) {
    let arr = str.split('-');

    str = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');

    console.log(str);
    return str;
}

camelize("background-color");