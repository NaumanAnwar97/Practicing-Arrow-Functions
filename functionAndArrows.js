"use strict";
// ============================= \\
/* Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223*/
function reverseNum(num) {
    let reverse = String(num);
    return Number(reverse.split("").reverse().join(""));
}
console.log(reverseNum(12345));
// Using Arrow Function
let myReverse = (x) => {
    let reverse = String(x);
    return Number(reverse.split("").reverse().join(""));
};
console.log(myReverse(6789));
// =======================
/*Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam*/
function palindrome(s) {
    if (s.split("").reverse().join("") == s) {
        return `Yes ${s} is palindrome.`;
    }
    else
        return `No ${s} is not a palindrome.`;
}
console.log(palindrome("madam"));
console.log(palindrome("nurse"));
console.log("\n");
// Arrow Function
let palindrome2 = (word) => {
    if (word.split("").reverse().join("") == word) {
        return `Yes ${word} is palindrome.`;
    }
    else
        `No ${word} is not a palindrome.`;
};
console.log(palindrome("madam"));
console.log(palindrome("nurse"));
// ==============================
/* Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '*/
function titleCase(phrase) {
    let myArray = phrase.split(" ");
    let myArray1 = [];
    for (var x = 0; x < myArray.length; x++) {
        myArray1.push(myArray[x].charAt(0).toUpperCase() + myArray[x].slice(1));
    }
    return myArray1.join(" ");
}
console.log(titleCase("my name is nauman anwar"));
// ==================================
// Using Arrow Function
let capitaliseWord = (phrase) => {
    let myArray = phrase.split(" ");
    let myArray1 = [];
    for (var x = 0; x < myArray.length; x++) {
        myArray1.push(myArray[x].charAt(0).toUpperCase() + myArray[x].slice(1));
    }
    return myArray1.join(" ");
};
console.log(capitaliseWord("i live in islamabad."));
