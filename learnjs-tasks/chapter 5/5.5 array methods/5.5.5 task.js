function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let copy = copySorted(arr);

console.log(arr);
console.log(copy);