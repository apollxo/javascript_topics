# Map

Map is a collection of keyed data items, just like an _Object_. But the main difference is that Map allows keys of any type.

Method and properties:

* `new Map()` – creates the map.
* `map.set(key, value)` – stores the value by the key.
* `map.get(key)` – returns the value by the key, undefined if key doesn’t exist in map.
* `map.has(key)` – returns true if the key exists, false otherwise.
* `map.delete(key)` – removes the element (the key/value pair) by the key.
* `map.clear()` – removes everything from the map.
* `map.size` – returns the current element count.

Example:

```js 
let myMap = new Map()

myMap.set(1, 'Hello world')
myMap.set(2, 'White collar')

console.log(myMap.get(1)) // returns value by getting key 
console.log(myMap.size) // returns the size of Map 
```

Map can use objects as key 

```js 
let user = {name: 'John', age: 23}
const map = new Map()

map.set(user, 'john')
console.log(map.get(john)) // returns 'john'
```

## How Map compares keys

To test keys for equivalence, Map uses the algorithm SameValueZero. It is roughly the same as strict equality ===, but the difference is that NaN is considered equal to NaN. So NaN can be used as the key as well.

This algorithm can’t be changed or customized.

__Chaining__

Every map.set call returns the map itself, so we can “chain” the calls:

```js 
map.set('1', 'str1')
.set(1, 'num1')
.set(true, 'bool1');
```

# Iteration over map 

For looping over a map, there are 3 methods:

1. `map.keys()` – returns an iterable for keys
2. `map.values()` – returns an iterable for values
3. `map.entries()` – returns an iterable for entries [key, value], it’s used by default in for..of.


Example:

```js 
let vegies = new Map({
    ['cucumber', 400],
    ['potato', 300],
    ['tomato', 200]
})

for (let key of vegies.keys()){
    console.log(key) // returns only keys: 400, 300,200
}

for(let value of vegies.values()){
    console.log(value) // returns values cucumber, tomato, potato
}

for(let entry of vegies.entries()){
    console.log(entry) // return both key and value cucumber, 200, ... 
}
```

Iteration goes same as order as entries are inserted. Unlike Object, Map preserve the actual order of values, keys 


Map has `forEach` method like Array:

```js 
// runs the function for each (key, value) pair
vegies.forEach((value, key , map) => {
    console.log(value, key) // cucumber: 500 etc
})
```

# `Object.entries()` , Map from Object 


When a `Map` is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:

```js 
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

console.log( map.get('1') ); // str1
```

Obviously, we can't iterate over Object, so we need array. We can get array using `Object.entries()` method 
```js 
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

console.log( map.get('name') ); // John
```

Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.


# `Object.fromEntries()`: Object from Map 

If we can get array from object, we can do vice-versa using `Object.fromEntries()` method. It creates object from array 

```js 
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

console.log(prices.orange); // 2
```

We can use Object.fromEntries to get a plain object from Map.

Let's create  object from data stored in Map 
```js 
let map = new Map()
map.set(john, 'manager')
map.set(anna, 'employee')
map.set(alan, 'CEO')

let obj = Object.fromEntries(map.entries()) // it returns the object stored entries from map 

console.log(obj) // {...}
```
A call to map.entries() returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries.

Shorter version: 
```js 
let obj = Object.fromEntries(map); // omit .entries()
```
That’s the same, because Object.fromEntries expects an iterable object as the argument. Not necessarily an array. And the standard iteration for map returns same key/value pairs as map.entries(). So we get a plain object with same key/values as the map.

# Set 

A `Set` is a special type of collection - `set of values`, but without keys. Each value may occur only once.

It's main methods:

* `new Set([iterable])` – creates the set, and if an `iterable` object is provided (usually an array), copies values from it into the set.
*  `set.add(value)` – adds a value, returns the set itself.
* `set.delete(value)` – removes the value, returns true if value existed at the moment of the call, otherwise false.
* `set.has(value)` – returns true if the value exists in the set, otherwise false.
* `set.clear()` – removes everything from the set.
* `set.size` – is the elements count.

_Note!_ 
The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.

Set is just the right thing for that:
```js 
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}
```

The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find. But the performance would be much worse, because this method walks through the whole array checking every element. Set is much better optimized internally for uniqueness checks.

# Iteration over Set 

We can loop over a set either with for..of or using forEach:

```js 
let set = new Set(['john', 'anna', 'hobert', 'hugh'])

for(let name of set) console.log(name) //log names 

set.forEach((value, valueAgain, set) =>{
    console.log(value)
    console.log(valueAgain)
})
```
Note the funny thing. The callback function passed in forEach has 3 arguments: a value, then the same value valueAgain, and then the target object. Indeed, the same value appears in the arguments twice.

That’s for compatibility with Map where the callback passed forEach has three arguments. Looks a bit strange, for sure. But this may help to replace Map with Set in certain cases with ease, and vice versa.


The same methods Map has for iterators are also supported:

* `set.keys()` – returns an iterable object for values
* `set.values()` – same as `set.keys()`, for compatibility with `Map`
* `set.entries()` – returns an iterable object for entries [value, value], exists for compatibility with Map 

Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.

