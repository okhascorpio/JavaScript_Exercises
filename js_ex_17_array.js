/*
Common practice to create js array with 'const' key word
For simplicity, readability and execution speed, 
    use the array literal method, not the 'new Array()' method.
Access or assign array elements by index e.g. 'cars[0]' is the first element.
Access full array by the array name.
*/


const cars = [
  "Saab",
  "Volvo",
  "BMW"
]
//document.getElementById("demo").innerHTML = cars;
console.log("cars= "+cars);
console.log("cars[2]= "+cars[2]);
console.log("Is 'cars' an array? "+Array.isArray(cars));
