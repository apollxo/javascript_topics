# weakMap and weakSet

we already know that the Javascript engine keeps the value in memory while it's reachable and can be used.

```js 
let john = { name: "John" };

// the object can be accessed, john is the reference to it

// overwrite the reference
john = null;

// the object will be removed from memory
```

The properties of objects, arrays or another data structures are reachable and kept in memory, as long as the data structure is in memory. 

For instance, if we put an object into array, it's still reachable even if there aren't any refernce to it.  

Similar to that, if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.

```js 
let user = {name: 'John'}
let map = new Map()
map.set(user, 'obj')

user = null 

map.keys(user) // [Map Iterator] { { name: 'John' } }
```

The difference between `Map` and `WeakMap` is the `WeakMap` only requires the object as key, non-premitives are not accepted

```js 
let obj = {}

let map = new WeakMap()

map.set(obj, 'hello')
map.set('top', 'non-premitive') // Uncaught TypeError: Invalid value used as weak map key
```
If we use object as a key and there are not any references to it, it will be removed from memory. 
 
```js 
let john = {name: 'john'}

let map = use WeakMap() 
map.set(john, 'hello')
john = null // john is now removed

```

Compare it with the regular Map example above. Now if john only exists as the key of WeakMap – it will be automatically deleted from the map (and memory). 

WeakMap has only the following methods:
* `weakMap.set(key, value)`
* `weakMap.get(key)`
* `weakMap.delete(key)`
* `weakMap.has(key)`

That’s for technical reasons. If an object has lost all other references (like john in the code above), then it is to be garbage-collected automatically.

# Use case: additional data

The main area of application for WeakMap is an additional data storage.

If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.

We put the data to a WeakMap, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well.

```js 
weakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically
```

For instance, we have code that keeps a visit count for users. The information is stored in a map: a user object is the key and the visit count is the value. When a user leaves (its object gets garbage collected), we don’t want to store their visit count anymore.

Example:
```js 
let visitsCountMap = new Map(); // map: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
```
The code if user leaves:
```js 
let john = { name: "John" };

countUser(john); // count his visits

// later john leaves us
john = null;
```
We need to clean visitsCountMap when we remove users, otherwise it will grow in memory indefinitely. Such cleaning can become a tedious task in complex architectures.

We can avoid it by switching to WeakMap instead:

```js 
let visitsCountMap = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
```
Now we don’t have to clean visitsCountMap. After john object becomes unreachable, by all means except as a key of WeakMap, it gets removed from memory, along with the information by that key from WeakMap.

# Use case: caching


