function alphabeticalOrder(arr) {
    // Only change code below this line
  // use [...arr] to avoid mutating original array
    return [...arr].sort((a,b)=> {
      return (a===b ? 0 : a>b ? 1 : -1)
      })
    // Only change code above this line
  }
  alphaArray = ["a", "d", "c", "a", "z", "g"];
  sortedArray = alphabeticalOrder(alphaArray);
  console.log("Original: "+ alphaArray+ "\nSorted: "+ sortedArray);