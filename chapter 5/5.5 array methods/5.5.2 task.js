function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && b >= item));
}

let arr = [7, 4, 2, 6, 3, 10];

console.log(filterRange(arr, 4, 7));