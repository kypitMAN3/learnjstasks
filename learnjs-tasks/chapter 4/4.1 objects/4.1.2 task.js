function isEmpty(obj) {
    for (let prop in obj) {
        if (prop in obj) return false;
    }

    return true;
}