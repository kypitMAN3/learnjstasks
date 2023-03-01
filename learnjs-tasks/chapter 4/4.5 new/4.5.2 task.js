const prompt = require('prompt-sync')();

function calculator() {
    this.read = function() {
        this.a = +prompt('Введите число А');
        this.b = +prompt('Введите число B');
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }
  };