Function.prototype.defer = function(ms) {
    let savedThis = this;
    return function(...args) {
        return setTimeout(() => savedThis.apply(this, args), ms);
    }
}
