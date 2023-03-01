function getMaxSubSum(arr) {
    let max = 0;
    let temp = 0;

    for (let number of arr) {
        temp += number;
        max = Math.max(max, temp);

        if (temp < 0) temp = 0;
    }

    console.log(max);
    return max;
}

getMaxSubSum([-1, 2, 3, -9]);

getMaxSubSum([100, -9, 2, -3, 5]);