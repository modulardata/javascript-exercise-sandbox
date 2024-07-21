/*
PART:Deep Copying Objects
? JavaScript->Working with -> dataObjects
https://hyperskill.org/learn/step/27917
https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy
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

//[ ] //!ISSUE TO REFERENCE
console.log(rectangle.sizes.height); // 30
const cloneRectangle = Object.assign({}, rectangle);
console.log(rectangle.sizes === cloneRectangle.sizes); // true, same object
// rectangle and cloneRectangle share sizes
rectangle.sizes.width = 25;    // change a property from one place
console.log(cloneRectangle.sizes.width); // 25, get changed result from the other one
/*
 NOTE:To fix that and make rectangle and cloneRectangle truly separate objects, it's best to use a cloning loop that examines each value of rectangle[key] and, if it's an object, replicates its structure as well. That is called deep cloning.
*/

/* [ ] Using Json.stringify() and JSON.parse()
! Using the JSON. stringify() and JSON.parse() methods allows for making deep copies of objects. A deep copy of an object will have properties that don't share the same references as the source object from which the copy was made. As a result, you can change one object, and it will not cause any unexpected changes to neither the source nor the copy.
*/

const man = {
  name: 'John',
  age: 28,
  mother: { name: 'Kate', age: 50 }
};

// This is a JSON string
console.log(JSON.stringify(man)); // '{"name":"John","age":28,"mother":{"name":"Kate","age":50}}'



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
/*
NOTE: //! Now you have two independent objects, and the property mother is not a reference.
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
const counter = {
  count: 1,
  increaseCount: function () {
    this.count += 1
    return this.count
  }
}

// functions are ignored
console.log(JSON.stringify(counter)) // {"count": 1}

JSON.stringify({ key: NaN });
JSON.stringify({ key: Infinity });
// all will be converted to '{"key": null}'

// You can check it in the console
const date = new Date();

console.log(date); // Sat Mar 11 2023 13:51:30 GMT+0300 ((Standard Time))
console.log(typeof date); // 'object'

const copiedDate = JSON.parse(JSON.stringify(date));

console.log(copiedDate); // '2023-03-11T10:51:30.814Z'
console.log(typeof copiedDate); // 'string'

// ?structuredClone() //NOTE:clones the object with all nested properties.

const user = {
  name: 'Chandler',
  surname: 'Bing',
  friends: ['Monica', 'Ross', 'Rachel']
};

const cloneUser = structuredClone(user);
console.log(cloneUser);
/*
{
  name: 'Chandler',
  surname: 'Bing',
  friends: [ 'Monica', 'Ross', 'Rachel' ]
}
*/
/*
structuredClone({
  f: function () { }
});  // error
*/

const obj = { a: NaN, b: new Date(), c: [1, 2, 3] };

console.log(structuredClone(obj));
