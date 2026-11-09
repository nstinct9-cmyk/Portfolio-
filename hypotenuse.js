// Practice Exercise 2.3 - Hypotenuse using Pythagoras: a2 + b2 = c2

let a = prompt("Enter value for a:");
a = Number(a);
let b = prompt("Enter value for b:");

// prompt() returns a string, convert to number
a = Number(a);
b = Number(b);

// Square both values, add them, then find square root
let c = Math.sqrt(a * a + b * b);

console.log("The hypotenuse is: " + c);