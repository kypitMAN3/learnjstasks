const prompt = require('prompt-sync')();

let calculator = {
    read() {
        this.a = +prompt('Введите число А');
        this.b = +prompt('Введите число B');
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
  };