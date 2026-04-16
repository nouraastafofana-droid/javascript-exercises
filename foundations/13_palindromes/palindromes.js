const palindromes = function (entree) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let nettoyage = entree.toLowerCase().split('').filter(car => alphanumerical.includes(car)).join("");

    let palindrome = nettoyage.split("").reverse().join("");


    if (nettoyage === palindrome){
        return true
    }
    else{
        return false
    }
};


// Do not edit below this line
module.exports = palindromes;
