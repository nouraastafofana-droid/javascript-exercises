const fibonacci = function(num) {
    num = +num
    if (num < 0){
        return "OOPS"
    }
    else if (num === 0){
        return 0
    }
    else if (num === 1){
        return 1
    }
    else{
        let first = 0;
        let sec = 1;
        for (let i = 2; i<= num; i++){
            let current = first + sec;
            first = sec;
            sec = current;




        }

        return sec;


    }
};

// Do not edit below this line
module.exports = fibonacci;
