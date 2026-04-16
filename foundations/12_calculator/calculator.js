const add = function(a, b) {
    return a + b
};

const subtract = function(a, b) {
    return a - b
};

const sum = function(array) {
    return array.reduce((total, item) => total + item,0)
};

const multiply = function(array) {
    return array.reduce((total, item) => total * item, 1)
};

const power = function(base, exponent) {
    return base ** exponent
};

const factorial = function(a) {
    if (a === 0 ){
        return 1
    }
    else{
        let fact = 1
        for (let i = a; i> 0; i--){
            fact *= i
        }
        return fact
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
