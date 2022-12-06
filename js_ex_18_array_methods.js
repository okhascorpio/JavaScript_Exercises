/*
toString()      converts array to csv string. 
JavaScript automatically converts an array to a comma separated string ie. without using toString(), when a primitive value is expected.
All JS objects have toString() method.

join()          does the same but instead of coma you provide the seperator. e.g.join("+")
pop() removes last item from the array, and return value is what was poped.
push("new last item") adds new item at the end of the array, and return value is the new length of the new array.

shift()         removes first item of the array, shifts all others to lower index, return value is what was shifted out.
unshift("new first item") adds new item at the beginning, return value is the new length of new array.

delete array[1]     removes 2nd item from the array and leaves "undefined" hole at 2nd place.

Arr1.concat(Arr2)   concats two arrays and returns a new array joined 1 and 2. concat(args) arguments can be many arrays or strings.

Arr1.splice(2,1,"item1","item2")        adds item1,item2 starting at 2 index (ie 3rd place) and removes 1 item. 
splice(2,1,"item")          means start adding at position 2 and remove 1 item from the array
splice returns an array of deleted items.

slice(index)        creats new array starting at the given index, OR
slice(1,2)      returns new array by slicing original array starting at 1st argument index and stoping (not including) 2nd argument index.
*/

const fruits = ["Banana", "Orange", "Lemon", "Apple"];
const more_fruits="Mango"

console.log("array to csv string: "+fruits.toString());
console.log("join using + instead of ,: "+fruits.join("+"));
console.log("pop() last value: Removed "+fruits.pop()+"\n  New array: "+fruits.toString());
console.log("push 'Apple' back in at the end: New length is "+fruits.push("Apple")+"\n  New array: "+fruits.toString());
console.log("shift() 1st item out: "+fruits.shift()+"\n  New array: "+fruits.toString());
console.log("unshift 'Banana' back in at 1st position: New length is "+fruits.unshift('Banana')+"\n  New array: "+fruits.toString());
console.log("delete index 2 value from fruits: "+delete fruits[2]+"\n  fruits[2]= "+fruits[2]);
//add Lemon back in
fruits[2]="Lemon";
console.log("concat two arrays: "+fruits.concat(more_fruits));
console.log("splice more_fruits into fruits at position index 2: "+fruits.splice(2,0,more_fruits)+"\n  New array: "+fruits.toString());
console.log("use splice to remove value at index 2 without leaving a hole: Removed "+fruits.splice(2,1)+"\n  New array: "+fruits.toString());
console.log("slice fruits starting index 2. Slice is "+fruits.slice(2));

