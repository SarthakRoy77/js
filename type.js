// Type conversion = change the dataype of a value to another
//                  (strings, booleans, numbers)

let age = window.prompt("How old are you?");

age += 1; // This will append one to the string age 
        //  and not actually add one to the value e.g 25+ 1 = 251
console.log(age);

// Converting string to number
age = Number(age, typeof age);

let x = "pizza";
let y = `pizza`;
let z = "pizza";

x= Number(x);
x= String(x);//This will output NaN-Not a number
x= Boolean(x);//This will say if the value has a character or not

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);