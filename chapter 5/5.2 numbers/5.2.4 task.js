function randomInteger(min, max) {
    let integer = min + Math.random() * (max - min + 1);
    return Math.floor(integer);
}