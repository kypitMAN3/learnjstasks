function debounce(f, ms) {
    let flag = false;

    return function() {
        if(flag) return;

        f.apply(this, arguments);
        flag = true;
        setTimeout(() => flag = false, ms);
    }

}