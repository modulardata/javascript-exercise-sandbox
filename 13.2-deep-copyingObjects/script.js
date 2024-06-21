/*
PART:Deep Copying Objects
? JavaScript->Working with -> dataObjects
*/

// ? Nested objects
// NOTE: Properties in objects can be not only primitives but also references to other objects.

const rectangle = {
  color: "red",
  sizes: {
    height: 30,
    width: 15
  }
};
//[ ] !ISSUE TO REFERENCE
console.log(rectangle.sizes.height); // 30
const cloneRectangle = Object.assign({}, rectangle);
console.log(rectangle.sizes === cloneRectangle.sizes); // true, same object
// rectangle and cloneRectangle share sizes
rectangle.sizes.width = 25;    // change a property from one place
console.log(cloneRectangle.sizes.width); // 25, get changed result from the other one
/*
 NOTE:To fix that and make rectangle and cloneRectangle truly separate objects, it's best to use a cloning loop that examines each value of rectangle[key] and, if it's an object, replicates its structure as well. That is called deep cloning.
*/

//[ ]
//! Using JSON

const man = {
  name: 'John',
  age: 28,
  mother: { name: 'Kate', age: 50 }
};

console.log(JSON.stringify(man)); // '{"name":"John","age":28,"mother":{"name":"Kate","age":50}}'
// This is a JSON string


const deepCloneMan = JSON.parse(JSON.stringify(man));

// JSON.parse converts JSON string into an object

console.log(deepCloneMan);
/*
{
 name: 'John',
 age: 28,
 mother: { name: 'Kate', age: 50 }
}
*/

console.log(man === deepCloneMan); //false
console.log(man.mother === deepCloneMan.mother); //false

deepCloneMan.mother.age = 45;
man.name = 'Jack';
console.log(man);
/*
{
 name: 'Jack',
 age: 28,
 mother: { name: 'Kate', age: 50 }
}
*/

console.log(deepCloneMan);
/*
{
 name: 'John',
 age: 28,
 mother: { name: 'Kate', age: 45 }
}
*/
