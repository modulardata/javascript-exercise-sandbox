let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');
console.log('fruits initial instance:', fruits);


// Get value by index
x = numbers[0]; // 12
x = numbers[0] + numbers[3]; // 12 + 29

x = `My favorite fruit is an ${fruits[2]}`; // My favorite fruit is an orange

x = numbers.length; // 6

fruits[2] = 'pear'; // orange is now pear

// length is not read-only
fruits.length = 2; // fruits is now ['apple', 'grape']

fruits[3] = 'strawberry'; // fruits is now ['apple', 'grape', 'pear','strawberry']

// Using the length as the index will always add on the the end
fruits[fruits.length] = 'blueberry'; //
console.log(fruits);

fruits[fruits.length] = 'peach';
console.log(fruits);





x = fruits;

console.log(x);
