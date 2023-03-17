function printListReverseRec(list) {
    if (list.next) {
        printListReverseRec(list.next);
    }

    console.log(list.value);
}

function printListReverseCyc(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.unshift(tmp.value);
        tmp = tmp.next;
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
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


printListReverseCyc(list);
printListReverseRec(list);