const sumAll = function(int_1, int_2) {

    arr = [];
    if (int_1 < 0 || int_2 < 0 || !Number.isInteger(int_1) || !Number.isInteger(int_2) ) return "ERROR";

    for (let i = Math.min(int_1, int_2); i<=Math.max(int_1,int_2); i++){
        arr.push(i)
    };
    return arr.reduce((total, item) => total + item );

};

// Do not edit below this line
module.exports = sumAll;
