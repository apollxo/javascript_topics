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


