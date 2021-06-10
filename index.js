/**
 * Example one - Variable declaration
 */

//var a;

//console.log(a);


//console.log(b); //index.js:10 Uncaught ReferenceError: b is not defined at index.js:10

//let c;

//console.log(c);

//const d; //Uncaught SyntaxError: Missing initializer in const declaration


//console.log("Hello from external JS Script");

/**
 * Example 2 - "let"
 */

//let myNumber = 10;

//console.log(myNumber);

//let myString;

//console.log(myString);

//myString = " Hello from string ";

//console.log(myString);

//myString = " New Value for this string var "

//console.log(myString);

/**
 * Example 3 - "var"
 */

//var myNumber = 10;

//console.log(myNumber);

//var myString;

//console.log(myString);

//myString = " Hello from string ";

//console.log(myString);

//myString = " New Value for this string var "

//console.log(myString);

/**
 * example 4 - "const"
 */ 
 
 //const myBoolean = true;

// console.log(myBoolean);

 // myBoolean = false; // Assignment to constant variable.

 //const myBoolean = false; // Uncaught SyntaxError: Identifier 'myBoolean' has already been declared

 /**
  * challenge 1
  * 
  * DECLARE VARIABLE "myObject" and assign value {}.
  * print this to the console 
  * NOTE: variable "myObject" will not be assigned in the future
  */

//const myObject = {};

 //console.log(myObject);

 //myObject = {}; //index.js:85 Uncaught TypeError: Assignment to constant variable. at index.js:85

 /**
  * Challenge 2
  * 
  * declare "x" and assign value 10 to it
  * declare "y" and assign value to true
  * declare "myObject" and assign object with two name-value pairs
  * declare "AnotherObject"
  * later assign value to it - object with three name-value pairs
  */

// let x = 10;
// const y = true;
// const myObject = {
//     a: x,
//     b: y,
// };
   
// console.log(myObject);
//x = 20
// let antherObject
// antherObject = {
//    newA: x,
//    b: y,
//    c: myObject
// };
 
 //newA = 20
// b = true
 //c = {}


// console.log(antherObject);

let myVariable;

console.log(myVariable); // undefined

myVariable = 10;
console.log(myVariable);

myVariable = true;
console.log(myVariable); //true

myVariable = {
x: true,
y: 10

}

console.log(myVariable);

myVariable = 20;

console.log(myVariable);

*******************************************************************

let myTest = null;
console.log(myTest);

myTest = 15;
console.log(myTest);

myTest = false;
console.log(myTest);