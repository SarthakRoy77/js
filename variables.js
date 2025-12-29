
// Variable = A container that stores a value.Behavaes as if it were the value it contains
// 1.declaration     let x;
// 2.assignment      x = 100;


// Declaration and assignment as different
let x;
x = 100;
console.log(x);

// Declaration and assignment as one
let y = 200;
console.log(y)

// Include variables in outputs 
let age = 3;
console.log(`Your age is ${age}`);

//Reveal datatype of a variable
console.log(typeof age);

//Booleans in Javascript
let online = true;
console.log(`bro is online : ${online}`);

//Mini program

let fullName = "Sarthak";
let age1 = 25; 
let isStudent = true;

document.getElementById('p1').textContent=`My name is ${fullName}`
document.getElementById('p2').textContent=`My age is ${age1}`
document.getElementById('p3').textContent=`Student status : ${isStudent}`


// arithmetic operators = operands (value, variables, etc.)
                        //operators (+ - * / ** )

let students = 30;

// Addition
students = students+1;
//Subtraction 
students = students-1;
// Multiplication
students = students*2;
// Division
students = students / 2;
// Exponentiation
students = students ** 2;
// Remainder
let extrastudents = students % 3 ;

// Augmented Assignment Operators
// These are : +=, -=, *= , /=, **= , %=

// Increment & Decrement Operators
// students++;
// students--; 
// Thse either add 1 or subtract 1 to it .


/* operator precedence 
    1.()
    2.exponent 
    3.multiplication & division & modulo
    4.addition & subtraction 
*/
console.log(students);

let result = 1+2*3+4**2;
console.log(result);