// Task 1

// Qustion 1: JavaScript statement that reverses a string
let input = "Hello";
let reversed = input.split("").reverse().join("");
console.log(reversed); // Output: olleH

//Qustion 2: Short notes on data types + 3 methods each 

/**
 * String Data Type:
 * In JavaScript, a string is a series of characters that represents text. 
 * They are enclosed in brackets (single ' ' or double " " or backticks ` `). 
 * They are immutables, that is, they have fixed characteristics that cannot be changed after creation. 
* /

//Three (3) methods for strings:

/** 
 * toUpperCase(): It converts all characters to uppercase. Example: "hello".toUpperCase() → "HELLO"
 * slice(start, end): It returns a new string that contains part of an original string. Example: "Hello".slice(1, 4) → "ell”
 * length() – returns the number of characters in the string. Example: "Hello".length → 5
*/

//Number Data Type:
/**
 * In JavaScript, a number can be used to store numeric data, such as integers and decimals. 
 * We can only have a single number type, and 
 * can/may be used to perform arithmetic and to calculate.
*/

//Three (3) methods for numbers:
/**
 * toFixed(n): This Returns a number to a specified number of decimal places. toFixed(decimalPlaces).
 * Example: 3.14159.toFixed(2) → "3.14"
 * toString() – Converts a number to a string. Example: (25).toString() → "25"
 * parseInt() / parseFloat() – Converts a string to a number (integer or decimal). Example: parseInt("45") → 45 parseFloat("3.14") → 3.14
*/

//Qustion 3: If statement for score grading

let score = 75;

if (score >= 70 && score <= 100) {
    console.log("Excellent");
} else {
    console.log("Invalid score");
}


let score = 65;

if (score >= 60 && score <= 69) {
    console.log("Very good");
} else {
    console.log("Invalid score");
} 


let score = 55;

if (score >= 50 && score <= 59) {
    console.log("Good");
} else {
    console.log("Invalid score");
} 


let score = 45;

if (score >= 40 && score <= 49) {
    console.log("Poor");
} else {
    console.log("Invalid score");
} 

let score = 35;

if (score >= 30 && score <= 39) {
    console.log("Very poor");
} else {
    console.log("Invalid score");
} 
