// splice() method 

// You can insert, remove, replace elements in array with splice method
// You can delete item with splice(a,b); a is index for beginning and b is numbers to delete 

let arr = [1,2,3,4,5]
arr.splice(1,1) // it removes 1 item from index 1
console.log(arr) // output > [1,3,4,5]


// Deleting items with delete, but it doesn't change length of array 
//Example 

delete arr[5]

console.log('length: ' + arr.length) // output > 5 


// You can add items instead of removed items with splice()
//arr.splice(a,b, item1, item2);

arr.splice(1,2, 'hello' , 'world') // output > [1,'hello', 'world', 5]
// splice method returns removed items
arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

console.log( removed ); // "I", "study" <-- array of removed elements

// you can insert elemets without removing 

arr = ['i', 'study', 'math']

console.log(arr.splice(2, 0 , 'every', 'day'));

// While using splice you are allowed to have negative index in splice method 

arr = ['i','know', 'better']
console.log(arr.splice(-1 , 0, 'you', 'than')); // ['i', 'know', 'better', 'than', 'you']

// slice() method
// slice method does not modify the array, but it returns the part of array

arr = [1,2,3,4,5]
const part = arr.slice(1,3) // output > 2,3
console.log(part)

// slice(a, b) => a starting index and b is number of items. slice() method doesnt return last element , so if you do slice(1,3) it get 2 items from first index
// You can use negative number in slice method. 
const lastPart = arr.slice(-2) // output > [4,5]
// Negative number get from the end of array


// concat() method creates new array, it also add new values or arrays into given array
// Example

arr = ['hello', 'world']

const newArr = arr.concat(['created', 'by', 'Apollo']);

console.log(newArr) // output > [ 'hello', 'world', 'created', 'by', 'Apollo' ]

// concat() method can add array-like Objects like this:

const arrayLike = {
  1: 'somenody',
  2: 'kicked'
}
console.log(arr.concat(arrayLike)); //output > 

// Iteration:
// forEach() method allows to run function for every item in array. Syntax

arr.forEach((item, index, array) => {
  // do something 
})

// In order to show every item in array, you can use:
arr = ['Hello', 'world', 'sup', 'man']

arr.forEach((item, index) => {
  console.log('There are ' + item + ' at index of ' + index) ; // output > 'There are Hello at index of 0' ...
 })

// Searching in array

// Methods to search items in array: indexOf() , includes()
// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// indexOf() method uses === (strict equality check), so if you search false it doesnt return 0


arr = [1,2,3,4,5]

let index = arr.indexOf(3,1) // output >  2 > returns the index of item
console.log(index)


// includes() 
//arr.includes(item, from) – looks for item starting from index from, returns true if found.

arr = ['hello', 'bye', 'welcome', 'how','how' , 'are', 'you']
index =  arr.includes('welcome', 1); // output > true returns true if it includes, otherwise false

// Usually these two methods take only one argument

//alert( arr.indexOf(false) ); // 2
//alert( arr.indexOf(null) ); // -1
//alert( arr.includes(1) ); // true

// lastIndexOf() method works same as indexOf(), but it looks for items from right to left


let fruits = ['Apple', 'Orange', 'Apple']

console.log( fruits.indexOf('Apple') ); // 0 (first Apple)
console.log( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

// find() method helps to find item from objects that are placed in array like this:
// let arr = [{
//   name: 'John',
//   age: 20
// },
// {
//  name: 'Anna',
//  age: 30
// }
// ] 

// Example

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1)

console.log(user.name) // 'John'


// findIndex() method returns the index, not item itself. If nothing found then it returns -1


users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];

console.log(users.findIndex(user => user.name === 'Pete')) // output > 1 

// lastIndexOf() method also returns index, but it runs from right to left 
// Consider 'John' value placed in index of 0 within the array, if you use lastIndexOf(), it returns 3. Because its in index 3 when you look from right to left

console.log(users.lastIndexOf(user => user.name === 'John')); // output > 3

// filter() method 
// when you use find() method, you can find only one element, but with filter() you can find multiple items at the same time 
// syntax >>> arr.filter(function)

users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let firstUsers = users.filter((user) => user.id < 3)
console.log(firstUsers) // output >  [{id: 1, name: "John"}, {id: 2, name: "Pete"}]

// map() method transform and reorder the array. it calls function for every item and returns array of result
// Syntax 

let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});


//Example: map() returns true if a word contains 4 or longer words 

let length = ['Hello', 'sup', 'joke', 'world'].map((item) => item.length >= 4) //
console.log(length)

//sort() method
