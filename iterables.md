# Iterables

Iterable objects are a generalization of arrays. That’s a concept that allows us to make any object useable in a <ins>for..of</ins> loop.

## for ... of 

The for ... of executes the loop operation on sequence of values in itearble object. Iterable objects are arrays ,objects, strings, nodelist and other DOM collections.[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

***Syntax***

for (variable of iterable)
  statement


```js 
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

***Note:***
Each iteration creates a new variable. Reassigning the variable inside the loop body does not affect the original value in the iterable (an array, in this case).


## Symbol.iterator

<ins>Symbol.iterator</ins> is the protocol that makes native objects like Array, Set, and Map iterable by providing a hook into language features like for…of loops and the spread operator.
