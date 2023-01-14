// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr,bookName) {

  //bookList.push(bookName);
  return [...arr,bookName];
  
  // Change code above this line
}

// Change code below this line
function remove(arr,bookName) {
    //bookList.splice(book_index, 1);
    return arr.filter(book => book !== bookName)
    // Change code above this line
    
}
console.log(add(bookList,"New Book"))
console.log(remove(bookList,"On The Electrodynamics of Moving Bodies"))