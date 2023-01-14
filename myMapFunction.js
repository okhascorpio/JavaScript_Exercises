// map method applies on an array and takes a function as argument,
// applies that function on the array elements, 
// and returns a new array of those modified elements.

// using for loop
Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line
  for (let i=0;i<this.length;i++){
    newArray.push(callback(this[i],i,this))
  }
    // Only change code above this line
    return newArray;
  };

  // using forEach method
  Array.prototype.myMap2 = function(callback) {
    const newArray = [];
    this.forEach((element,index,arr1) => newArray.push(callback(element,index,arr1)));
    return newArray;
}


  let arr = [1,2,3,4,5,6,7,8,9,10];
  console.log(arr, arr.myMap(num => (num%2)), arr.myMap2(num => (num%3)));