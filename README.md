answer 1:

Var is Function-scoped. If declared outside of a function, it becomes globally scoped.
Variables declared with var are always hoisted to the top and initialized with undefined.
It Can be reassigned and redeclared within the same scope.

let is block-scoped. Variables are hoisted but not initialized, leading to a "temporal dead zone" until the declaration is processed.
It Can be reassigned but cannot be redeclared in the same scope.

Const is also block-scoped, like let. Similar to let in hoisting, with a temporal dead zone. It Cannot be reassigned and must be initialized at declaration.

answer 2:
map():Returns a array. forEach() does not return anything but undefined and filter() returns a new array.

answer 3:
Arrow function is short, concise version of functions. Best works in callBack function.

answer 4:
Destructuring in ES6 is a syntax feature that allows you to extract values from data structures—such as arrays or objects—and assign them 
to individual variables in a concise and declarative way.It simplifies the process of unpacking values,
making code more readable and reducing the need for multiple lines of property or index access.

const user = {
  id: 42,
  isVerified: true,
  profile: {
    name: 'John Doe',
    email: 'john@example.com'
  }
};

// Destructure nested objects
const { id, profile: { name, email } } = user;
console.log(id); // 42
console.log(name); // 'John Doe'
console.log(email); // 'john@example.com'

answer 5:
Template literals in ES6 are a new way to work with strings that make it easier to embed expressions, create multi-line strings, and improve readability.
They are enclosed by backticks (`) instead of quotes, unlike traditional strings.


