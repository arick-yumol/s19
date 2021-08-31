
/*
Primitive Data Types - built in data types
1) Strings
2) Numbers
3) Boolean
4) Null
5) Undefined

*/

/*
Reference Types
arrays
objects
*/

/*
Math Object
'.PI' method = displays the value of pi
'.floor()' method = removes the all the decimal numbers in a number (e.g. Math.floor(23.999) -> 23)
'.ceil()' method = round up a number (e.g. Math.ceil() -> )
'.random()' method = displays a random number with decimal numbers
//try Math.floor(Math.random()*10)
//*10 supposedly used to remove decimal number with .floor()
*/

//NaN - Not a Number (JS cannot represent NaN numerically, e.g. 0/0 = NaN, 35/NaN = NaN) (but considered a number)
//typeof (operator) - shows the data type

/*
Inherent True or False values
0 - false
'' - false
null - false
undefined - false

negative and positive numbers - true
string - true
*/

// let loggedInUser = null;
// loggedInUser = 'Homer Simpson'

// if(loggedInUser) {
// 	console.log('The value is true')
// }
// else {
// 	console.log('The value is false')
// }

//String Methods
//.length
//.toUpperCase()
//.toLowerCase()
//.trim()

// let y = 'helloo world    '
//e.g. y.trim().toUpperCase();

/*
Function Declaration versus Function Expression
Function Declaration - functions can be invoked even before function declaration
Function Expression - functions cannot be invoked before the function expression
Hoisting
*/

// let result = sayHello(); 			//stores the result of the function

// function sayHello() {				//function declaration
// 	console.log('Hello')
// }

// const sayHello2 = function () {		//function expression. stores the function itself
// 	return 'Hello'
// }

// sayHello2();

// function sayItAgain(func, num) {	//displays Hello once
// 	for (let i = 0; i < num; i++) {
// 		func;
// 		// alert();
// 	}
// }

// sayItAgain(sayHello2(), 3);

// function sayItAgain(func, num) {
// 	for (let i = 0; i < num; i++) {
// 		console.log(func());
// 	}
// }

// sayItAgain(sayHello2, 3);

// function sayItAgain(func, num) {
// 	for (let i = 0; i < num; i++) {
// 		console.log(func);
// 	}
// }

// sayItAgain(sayHello2(), 3);

/*
Template Literal

let item = 'iPad';
let price = 8000;
let qty = 5;

console.log('Total for ' + qty + ' ' + item + ' is ' + price * qty);
console.log(`Total for ${qty} ${item} is ${price * qty}`);
*/

/*
Arrow Functions

function addNums(num1, num2) {	//function declaration
	return num1 + num2;
}
let addNums = (num1, num2) => num1 + num2	//arrow function. Curly braces {} may be omitted if only a single line is used.
//let addNums = (num1, num2) => {num1 + num2} //same output as above

function testNum(num) {
	return num >= 0;
}
const testNum = num => num >= 0	//Parenthesis () in the parameters may be omitted if only a single parameter is used.

function sampleNum() {
	return Math.floor(Math.random()*10);
}
const sampleNum = () =>  Math.floor(Math.random()*10)	//Parenthesis () must be kept if no arguments are used.
*/

/*
Array Destructuring
*/

const vowels = ['a', 'e', 'i', 'o', 'u'];

// const a = vowels[0];
// const e = vowels[1];

const [a, e, i, o, u] = vowels;	//array destructure. Proper way because it descriptive.

console.log(a);
console.log(e);
console.log(i);
console.log(o);
console.log(u);

/*const [b, c, d, f, g] = vowels;	//trial but works

console.log(b);
console.log(c);
console.log(d);
console.log(f);
console.log(g);
*/
