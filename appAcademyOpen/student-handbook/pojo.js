/**Object data structure 
 * The object type in JS is a data structure that allows us to store data in key-value pairs.
 * 
 */

// 1. Using a symbol as a key
const sym = Symbol();
// console.log(sym)


// this is an example of how each symbol is 
// unique and cannot be duplicated

const sym1 = Symbol();
const sym2 = Symbol();

// console.log(sym1 === sym2 ) // false

// 2. You can also assign a description to a symbol
const symApple = Symbol("apple");
// console.log(symApple) // Symbol(apple)

// The main reason to use symbols is to create unique object keys 

// example on using string as keys 

// const dog = {};

// dog["sound"] = "woof";

// // dot notation 
// dog.age = 4;

// //Using bracket notation with a variable 
// const col = "color";
// dog[col] = "gray";

// console.log(dog) // {sound: "woof", age: 4, color: "gray"}

// The problem with using strings as keys is that they can be overwritten

// const dog = {};

// // I set an "id" key value pair on my dog 
// dog["id"] = 39;

// // Here imagine someone else comes into my code base and 
// // accidentally overwrites my "id" key value pair
// // This is called a name collision 

// dog.id = 42;

// console.log(dog) // {id: 42}


// Using symbols as keys is a great way to avoid name collisions, because each symbol is unique

// Example of using symbols as keys to prevent the name collision





