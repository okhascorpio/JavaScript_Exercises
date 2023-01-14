function checkEveryPositive(arr) {
  return arr.every((item) => item >= 0);
}

function checkSomePositive(arr) {
  return arr.some((item) => item > 0);
}

console.log("arr.every() = "+checkEveryPositive([1, 2, -3, 4, 5]));
console.log("arr.some() = "+checkSomePositive([1, 2, -3, 4, 5]));

