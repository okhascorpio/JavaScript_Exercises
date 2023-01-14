Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    this.forEach((element,index,arr1) => {if (callback(element,index,arr1)) {newArray.push(element)}});
  
    // Only change code above this line
    return newArray;
  };
  
  const newArr=[1,2,3,4,5,6,7,8,9,10];
  console.log(newArr.myFilter(num => num<5))
  