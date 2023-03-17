function printListRecursion(list) {
    console.log(list.value);

    if (list.next) {
        printListRecursion(list.next);
    }
}

function printListCycle(list) {
    let tmp = list;

    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

printListCycle(list);
printListRecursion(list);