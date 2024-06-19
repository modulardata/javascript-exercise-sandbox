//? Reference type

let skill = 'JavaScript';
let myStack = skill;


skill = 'HTML';
console.log(skill); // 'HTML'
console.log(myStack); // 'JavaScript'

let developer = { name: 'John', position: 'Frontend' };
let student = developer;

student.name = 'Karl';
console.log(student); // { name: 'Karl', position: 'Frontend' }
console.log(developer); // { name: 'Karl', position: 'Frontend' }

console.log(developer === student); // true


let a = {};
let b = {};
console.log(a === b); // false

let c = {};
let d = c;
console.log(c === d); // true

/* ////////////////////////////////////////////////////////////////////////////// */


//!? Using Spread operator

const developers = {
  name: 'John',
  age: 26,
};

// const student = { ...developers };
// console.log(student); // { name: 'John', age: 26 }

/* NOTE:
? Now you have an actual copy of the object, not just a reference copy. And these two objects are independent.
? The objects are not equal, so they have different references, and when you change one of the properties, it doesn't affect the other variable
NOTE: */

console.log(developers === student); // false
student.name = 'Ben';
console.log(developers.name, student.name); // 'John' 'Ben'

/* ////////////////////////////////////////////////////////////////////////////// */

//! more complex example
//? man object

let man = {
  name: "Jack",
  age: 28,
  mother: {
    name: "Kate",
    age: 50,
  },
};

let manCopy = { ...man };
console.log(man === manCopy); // false

manCopy.age = 42;
console.log(man.age, manCopy.age); // 28 42

console.log(man.mother === manCopy.mother); // true
/*
NOTE:Here we have the same problem again: the spread operator clones only primitives, but if you have reference type properties, this method copies only their references. It is called a //!shallow copy.
This means both variables point to the same object in memory. As a result, if the state of the object changes through any of the reference variables, it is reflected in both. */
manCopy.mother.age = 67;
console.log(man.mother); // { name: 'Kate', age: 67 }
console.log(manCopy.mother); // { name: 'Kate', age: 67 }



manFullCopy = { ...man, mother: { ...man.mother } };
console.log(man === manFullCopy); // false
console.log(man.mother === manFullCopy.mother); // false

const family = {
  child: {
    name: "Jack",
    age: 5,
  },
  father: {
    name: "Kevin",
    age: 30,
  },
  mother: {
    name: "Jess",
    age: 30,
  },
};

console.log(family.child); //{name: 'Jack', age: 5}
console.log(family.father); //{name: 'Kevin', age: 30}
console.log(family.mother); //{name: 'Jess', age: 30}

const deepFamilyCopy = {
  child: { ...family.child },
  father: { ...family.father },
  mother: { ...family.mother },
};


console.log(family.child === deepFamilyCopy.child); // false

const complicatedMan = {
  name: 'John',
  age: 28,
  mother: {
    name: 'Kate',
    age: 50,
    work: {
      position: 'doctor',
      experience: 15,
      address: {
        street: 'Park Avenue',
        house: 1
      }
    }
  }
};

console.log(complicatedMan.mother.work.address); //{street: 'Park Avenue', house: 1}

const complicatedManFullCopy = {
  ...complicatedMan,
  mother: {
    ...complicatedMan.mother,
    work: {
      ...complicatedMan.mother.work,
      address: { ...complicatedMan.mother.work.address }
    }
  }
};

console.log(complicatedMan.mother.work.address === complicatedManFullCopy.mother.work.address); // false

complicatedManFullCopy.mother.work.address.house = 2;

console.log(complicatedMan.mother.work.address); //{street: 'Park Avenue', house: 2}

console.log(complicatedManFullCopy.mother.work.address); //{street: 'Park Avenue', house: 2}

/*
NOTE:Using Object.assign
This method also allows getting a shallow copy of the object. The syntax goes like this:
//PART: Object.assign(targetObj, source1, source2, ...etc);
 */
man = { name: 'Ross' };
const property1 = { surname: 'Geller' };
const property2 = { occupation: 'Paleontologist' };
Object.assign(man, property1, property2);

console.log(man); // { name: 'Ross', surname: 'Geller', occupation: 'Paleontologist' }

//NOTE: if you need to copy one object, you can do this:
const woman = { name: 'Monica', surname: 'Geller' };
const cloneWoman = Object.assign({}, woman);
// Note the empty object {} as the first argument — this will ensure you don't mutate the original object.
console.log(cloneWoman); // { name: 'Monica', surname: 'Geller' }
console.log(woman === cloneWoman); //false

//NOTE: if you need to copy two objects, you can do this:

let familyMember = { brother: man };
Object.assign(woman, familyMember);
console.log(woman);
/*
{
  name: 'Monica',
  surname: 'Geller',
  brother: {
    name: 'Ross',
    surname: 'Geller',
    occupation: 'Paleontologist'
  }
}
*/
console.log(woman.brother === family.brother); //true
console.log(woman.brother === man); //true
console.log(man === familyMember.brother); //true
