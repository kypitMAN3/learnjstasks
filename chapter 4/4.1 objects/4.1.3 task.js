let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

function salariesSum(salaries) {
    let sum = 0;
    for (let prop in salaries) {
        sum += salaries[prop];
    }

    console.log(sum);
    return sum;
}

salariesSum(salaries);