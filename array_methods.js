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

