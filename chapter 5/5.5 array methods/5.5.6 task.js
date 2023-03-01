function Calculator() {
    this.calculate = function(str) {
        let splitString = str.split(' ');

        a = splitString[0];
        op = splitString[1];
        b = splitString[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.method[op](a, b);
    }

    this.addMethods = function(name, func) {
        this.method[name] = func;
    }

    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }
}