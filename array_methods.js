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

//sort() method sorts elements as string, here is an example with numbers

let nums = [1,2,15]
console.log(nums.sort()) // output > [ 1, 15, 2 ] Because, items are converted to strings for comparison. It sorts by lexicographical order. (https://en.wikipedia.org/wiki/Lexicographic_order)

// to use sort, you need to create our own function. 

function sorted(a,b) {
  if(a > b) return 1;
  if(a == b) return 0;
  if(a < b) return -1;
}

console.log(nums.sort(sorted)) //output >  [ 1, 2, 15 ]

// shorter way to do same as above

nums = [1,2,87]

console.log(nums.sort((a,b) => {return  a - b}))

//localeCompare() method is really handy for comparing strings. Because  It compares letters by their codes by default.

const cities = ['Österreich', 'Andorra', 'Vietnam'] 
console.log(cities.sort((a,b) => a > b ? 1 : -1)) // output > [ 'Andorra', 'Vietnam', 'Österreich' ] (incorect)

console.log(cities.sort((a, b) => a.localeCompare(b))) // output >  Andorra,Österreich,Vietnam (correct!)

// reverse() method reverses the oreder of array 
arr = [1, 2, 3, 4, 5];
arr.reverse();

console.log( arr ); // 5,4,3,2,1

arr = ['john', 'anna', 'bonapart']
console.log(arr.reverse()) // [ 'bonapart', 'anna', 'john' ]

// split() and join()
// Imagine we have a  comma-delimited string with names like: 'James, Anna, Thomas, Robert'
//We have to convert it to array. split() method will handle this issue

let names = 'James, Anna, Thomas, Robert'

// split() method returns array as result

console.log(names.split(', ')) // output >  [ 'James', 'Anna', 'Thomas', 'Robert' ]

// By the way, split() method can have second parameter split(', ', 3). 3 is now limit for how many items are placed in array, other will be ignored


arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

console.log(arr); // Bilbo, Gandalf

// You can split a word into letters with split('')

let word = 'gatsby'
console.log(word.split('')) //  output > [ 'g', 'a', 't', 's', 'b', 'y' ]

// At this point, there is a method can do these things vice versa. join() method make all splitted items into single one element.

let sentence = ['I', 'am', 'not' , 'an' , 'imposter']
console.log(sentence.join(' ')) // output > I am not an imposter 

// reduce() method runs function for each element in array. It contains these 4 arguments:
//accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
//item – is the current array item.
// index – is its position.
//array – is the array.
//
//Examples 
//1) Adding all numbers in array 
nums = [23,43,21,89]

const res = nums.reduce((total, item) =>  total + item)
console.log(res) //output > 176

// 2) Getting all prices added
let products = [
  {
    item: 'motor', price: 300
  },
  {
    item: 'monitor', price: 200
  },
  {
    item: 'tire', price: 120
  }
]

const allCost = products.reduce(
  (total, itm) =>{
    return total + itm.price
  }, 0 // starting number
)
console.log(allCost) // 620

// 3) Getting all names in to one array 

const allProductNames = products.reduce((name, item) =>{
  name.push(item.item)
  return name
}, [])
console.log(allProductNames) // ['motor', 'monitor', 'tire' ]

// reduceRight() method does the same, but goes from right to left

//-----------------------------------------------------------------------

// isArray() method return true if data is array, otherwise false
// Example 

console.log(Array.isArray({})) // false Because its object 
console.log(Array.isArray([])) // true Because its array


// Using object as a filter

let presidentReq = {
  min: 30,
  max: 70,
  lived: 10,
  isValid(user){
    return user.age >= this.min && user.lived >= this.lived
  }
};

// Candidate list

let candidates = [
  { name: 'John', age: 45, lived: 20 },
  { name: 'Sally', age: 28, lived: 5 },
  { name: 'Bob', age: 23, lived: 15 },
  { name: 'Alice', age: 35, lived: 12 }
];

const passedCand = candidates.filter((candidate) => presidentReq.isValid(candidate))

console.log(passedCand) // output [{ name: 'John', age: 45, lived: 20 },{ name: 'Alice', age: 35, lived: 12 }]

//There are few more array methods. but all methods mentioned above are often used 99% of time. 
//If you need more, See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
