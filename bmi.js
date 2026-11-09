// Chapter Project - BMI Calculator
// 1 inch = 2.54 cm
// 2.2046 pounds = 1 kilo
// BMI = weight (in kilos) / height (in meters) squared

let heightInches = 72;
let weightPounds = 180;

let heightCm = heightInches * 2.54;
let weightKilos = weightPounds / 2.2046;
let heightMeters = heightCm / 100;

let bmi = weightKilos / (heightMeters * heightMeters);

console.log("Height in inches: " + heightInches);
console.log("Height in centimeters: " + heightCm);
console.log("Weight in pounds: " + weightPounds);
console.log("Weight in kilos: " + weightKilos);
console.log("Height in meters: " + heightMeters);
console.log("BMI: " + bmi);