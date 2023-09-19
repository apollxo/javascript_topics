# Iterables

Iterable objects are a generalization of arrays. That’s a concept that allows us to make any object useable in a <ins>for..of</ins> loop.

## for ... of 

The for ... of executes the loop operation on sequence of values in itearble object. Iterable objects are arrays ,objects, strings, nodelist and other DOM collections.[[1]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)

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

To make the range object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).

1. When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.
2. Onward, for..of works only with that returned object.
3. When for..of wants the next value, it calls next() on that object.
4. The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.

```js
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
```

Please note the core feature of iterables: separation of concerns.

* The range itself does not have the next() method.
* Instead, another object, a so-called “iterator” is created by the call to range[Symbol.iterator](), and its next() generates values for the iteration.
So, the iterator object is separate from the object it iterates over.

Technically, we may merge them and use range itself as the iterator to make the code simpler.

Like this:
```js
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}

// range object itself is an iterator here
```

It has downside, it's impossible to use multiple for...of simultaneously. They share iterator state, and there is only one iterator, object itself. But two parallel for-ofs is a rare thing, even in async scenarios.


__NOTE__ :Infinite iterators

Infinite iterators are also possible. For instance, the range becomes infinite for range.to = Infinity. Or we can make an iterable object that generates an infinite sequence of pseudorandom numbers. Also can be useful.

There are no limitations on next, it can return more and more values, that’s normal.

Of course, the for..of loop over such an iterable would be endless. But we can always stop it using break.


## String is iterable

String are mostly used built-in iterables. You can iterate string characters using for...of

```js
for (let char of "test") {
  // triggers 4 times: once for each character
  alert( char ); // t, then e, then s, then t
}
```
 
 ## Calling iterator explicitly 

 You can also iterate over string by direct calls using Symbol.iterator. The following code gets value from iterable manually

 ```js
let str = 'hello world'
let iterator = str[Symbol.iterator]()
 while(true){
   let result = iterator.next()
   if(result.value == ' '){
    break
   }
   console.log(result.value)
 }

 // Code returns value until it reaches space after word 'hello'
 ```
This will give you more control than for...of. For example, we can split the iteration process: iterate a bit, then stop, do something else, and then resume later.

## Iterables vs array-likes

These two terms might seem very close to each other, but they are really different 

* iterables - are objects which can implement Symbol.iterator method
* array-likes = are objects that have indexes and length, they look like arrays

You can encounter objects which are both iterable and array-like

<ins>String</ins>, for example is both iterable and array-like.

Following code for array-like objects, but not iterable. You cant use Symbol.iterator method

```js
let array_like = {
  0: 'hello world',
  1: 'code monkey',
  length: 2
}

for(let word of array_like){
  
} // gives an error, because no Symbol.iterator
```


## Array.from

Array.from is method takes iterble and array-like objects and make them real array. We can use array method for it then.

Example for array-like:
```js
let array_like = {
  0: 'hello world',
  1: 'code monkey',
  length: 2
}

let arrayed = Array.from(array_like)
console.log(arrayed) // ['hello world', 'code monkey']
console.log(arrayed.pop()) // 'code monkey'
```

Example for iterable:
```js
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};


let arr = Array.from(range);
alert(arr); // output > 1,2,3,4,5 
```

Full syntax of Array.from allows us to use mapping functions

```js
Array.from(obj[, mapFn, thisArg])

let arr = Array.from(range, num => num * num); // range is object 

alert(arr); // 1,4,9,16,25
```

You can use Array.from to convert string to array of characters
```js
let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2
```

## What's surrogate pair:

The term "surrogate pair" refers to a means of encoding Unicode characters with high code-points in the UTF-16 encoding scheme.

To be continued...
