# Constructor functions 

Constructor functions create object instances of classes, which is like object templates
Constructor functions use 'new' and 'this' keyword

'this' keyword in function refers to new object 
'new' keyword creates new object
Example
```js
function User() {
  this.name = 'Bob'
}
const user = new User();
console.log(user) // output { name: "Bob"}
```
You can create multiple objects using same object template like this
```js
function User(name, age) {
  this.name = name;
  this.age = age;
}
const Bob = new User('Bob', 18)
const Anna = new User('Anna', 22)

console.log(Bob, Anna)// output {
//   name: "Bob",
//   age: 18
// } {
//   name: "Anna",
//   age: 22
// }  
```

# Constructor vs Object Literal

**Object literal**
```js
let user = {
    name: 'Bob'
}
```

**Constructor**
```js
  function User() {
    this.name = 'Bob';
}

var user1 = new User();
var user2 = new User();
```
Each object created using a constructor is unique. Properties can be added or removed from an object without affecting another one created using the same constructor. However, if an object is built using an object literal, any changes made to the variable that is assigned the object value will change the original object.

## Object Prototype 

You can add methods and properties using prototype.

```js
function User() {
    this.name = 'Bob';
}

let user1 = new User();
let user2 = new User();

// Adding property using prototype

User.prototype.age = 35

console.log(user1.age); // 25
console.log(user2.age); // 25
```
prototype adds new property and its shared all across instances of User

### Built-in Constructors

```js
var a = new Object(); 

var b = new String();
var c = new String('Bob')

var d = new Number();
var e = new Number(25);

var f = new Boolean();
var g = new Boolean(true);
```
