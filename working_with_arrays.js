// Working with arrays in Javascript 
// Adding and Removing items from array elements 
// Understanding of data structures like queues and stack
// Methods to organize arrays like FIFO (First_in_First_out) and LIFO (Last_in_First_out)

const arr = ['Apple', 'Peach', 'Donut', 'Jonathan', 'Hammond', 'James', 'Bugatti']

// Using Pop and Push [These two methods help to remove and add items only from the end of array]

// using pop() method to remove the last item from an array
// when you use pop method it return the item 

const lastItem = arr.pop()
console.log(lastItem) // output > 'Bugatti'

// Append the element to the end of the arrays
// When you use push() method it return the length of array 

const arrLength = arr.push('Hundai')
console.log(arrLength)


// Methods that work with the beginning of the array: 
// shift() method extracts the first element of the array and returns it;

const extractedFirst = arr.shift()

console.log(extractedFirst)

// unshift() method adds the element to the beginning of the arrays and returns length of array

const addedFirst = arr.unshift('common')

console.log(addedFirst)


// Methods push and unshift can add multiple elements at once:
// Example
let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
 console.log(fruits);



// Arrays work like objects, they are literally objects at core 
const arr2 = arr
// We should use arrays as they are oredered collections and not regular object.
// But we can do things with arrays like we do with objects
// We can add property to them 
// There are common misuse of array like:
// Add a non-numeric property 

arr2.age = 12
console.log(arr2.age) // output > 12
console.log(arr2) // output [..., name: 12]

// Make holes, like: add arr[0] and then arr[1000] (and nothing between them).

arr2[20] = 'hole'
console.log(arr2) // output > [..., 'Hyundai', <13 empty item>, age: 12]

// Fill the array in the reverse order 
// like arr[1000], arr[999] and so on.


// Performance (https://javascript.info/array#performance)
// Methods push/pop run fast, while shift/unshift are slow.
// when we use shift() method it removes the first item but it should does extra work
// it should  remove element at index 0 
// it should re-number other items 
// it should update the length of array
// Thats why shift and unshift methods, in other words working with beginning of array makes operation slower


// Cycling arrays using LOOP 

// You can cycle arrays using either their index or items. 
// Example for loop with index of array

let arr_loop = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr_loop.length; i++) {
  console.log( arr_loop[i] );
}

//Example for loop with items of array

let fruits_loop = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits_loop) {
  console.log( fruit );
}

// By the way we can use for...in with array its possible, but there are caveat

let arr_loop2 = ["Apple", "Orange", "Pear"];

for (let key in arr_loop2) {
  alert( arr_loop2[key] ); // Apple, Orange, Pear
}

// If we use for...in it lists items, indexes, non-numeric properties and methods, it wil cause extra problems when we're working with arrays-like objects. It makes performance slower of course.



// The length of array

// The lenght updates itself when we modify array and to be precise it is actually greatest array index plus (+) one, which arr[latest index] + 1 = arr.length
// Interestingly, you can edit lenght
const arr_leng = [1,2,3,4,5,6,7]
arr_leng.lenght = 3 //lenght will be truncated
console.log(arr_leng) // output > [1,2,3]

//You can clear array simply using arr.lenght = 0 


// new Array()
//If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.
//Example

let arr4 = new Array(2); // will it create an array of [2] ? 

console.log( arr4[0] ); // undefined! no elements.

console.log( arr4.length ); // length 2

// Multidimensional arrays 

//Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:


let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] ); // 5, the central element

// toString() URL  > https://javascript.info/array#tostring
//Arrays have their own implementation of toString method that returns a comma-separated list of elements.


let arr5 = [1,2,3,4]
console.log(arr5.toString()) // output > '1,2,3,4'


