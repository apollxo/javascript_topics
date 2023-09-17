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


