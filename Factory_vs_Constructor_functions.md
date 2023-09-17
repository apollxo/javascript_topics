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
**You can add function to Constructor**

```js
function User(name, age){
    this.name;
    this.age = age 
    this.sayHello = function(){
        console.log('HEllo '+name )
    }
}

const Bob = User('Bob', 12)
Bov.sayHello() //Hello Bob
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


# Factory Functions 

Factory Functions are a very useful tool in JavaScript. Factory Functions in JavaScript are similar to constructor functions/class functions, but they do not require the use of the ‘this‘ keyword for inner values or the use of the ‘new‘ keyword when instantiating new objects. Factory Functions can contain inner values, methods, etc. just like normal regular functions. Factory Functions differ from regular functions as they always return an object, which will contain any value, method, etc.

<hr>
If we have complex logic, and we have to create multiple objects again and again that have the same logic, we can write the logic once in a function and use that function as a factory to create our objects. It’s exactly the same as a real-world factory producing products.

Example 

```js 
	// Function creating new objects
	// without use of 'new' keyword
	function createRobot(name) {
		return {
			name: name,
			talk: function () {
				console.log('My name is '
				+ name + ', the robot.');
			}
		};
	}

	//Create a robot with name Chitti
	const robo1 = createRobot('Chitti');

	robo1.talk();


	// Create a robot with name Chitti 2.O Upgraded
	const robo2 = createRobot('Chitti 2.O Upgraded');

	robo2.talk();
// output 

//My name is Chitti, the robot.
//My name is Chitti 2.0 Upgraded, the robot.
```

Example2: 
```js 
	// Factory Function creating person
	var Person = function (name, age) {

		// creating person object
		var person = {};

		// parameters as keys to this object
		person.name = name;
		person.age = age;

		// function to greet
		person.greeting = function () {
			return (
				'Hello I am ' + person.name
					+ '. I am ' + person.age
					+ ' years old. '
			);
		};
		return person;
	};

	var person1 = Person('Abhishek', 20);
	console.log(person1.greeting());

	var person2 = Person('Raj', 25);
	console.log(person2.greeting());
```

