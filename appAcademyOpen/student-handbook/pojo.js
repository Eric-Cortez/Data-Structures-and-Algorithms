/**Object data structure 
 * The object type in JS is a data structure that allows us to store data in key-value pairs.
 * 
 * POJO stands for plain old javascript objects 
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

// const dog = {};
// const dogId = Symbol("id");
// dog[dogId] = 39; //{ [Symbol(id)]: 39 }
// // console.log(dog)

// const secondDogId = Symbol("id");
// dog[secondDogId] = 42; //{ [Symbol(id)]: 39, [Symbol(id)]: 42 }
// console.log(dog[dogId]) // 39
// console.log(dog[secondDogId]) //42
// console.log(dog) // { [Symbol(id)]: 39, [Symbol(id)]: 42 }

// we can access our key value pairs using bracket notation and passing in the variable
// we assigned our symbol to in this case dogId and secondDogId


// 3. Iterating over objects with symbol keys

// Since Symbols are relatively new to JS, older Object methods don't know about them 
// This includes for...each and Object.keys()

// const name = Symbol("name");
// const dog = {
//     age: 29,
// }

// dog[name] = "Fido";

// console.log(dog) // {age: 29, Symbol(name): "Fido"}

// console.log(Object.keys(dog)) // ["age"]
// for (let key in dog) {
//     console.log(key)// "age"
// }
// not that this does not print the Symbol(name) key 

// This provides an additional layer of security to our code base
// because your symbol keys are much more hidden (and safe) than string keys

// If we do want to access all the symbols in an object, we can use the Object.getOwnPropertySymbols method
// Example 
const name = Symbol('name');
const dog = {
    age: 29,
    // when defining an object we can use square brackets within an object to
    // interpolate a variable key
    [name]: "fido"
}

// console.log(Object.getOwnPropertySymbols(dog)); //[ Symbol(name) ]
