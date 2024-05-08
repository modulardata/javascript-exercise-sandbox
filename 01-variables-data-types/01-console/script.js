// // Log number
// console.log(100);

// // Log string
// console.log('Hello World');

// // Log multiple values
// console.log(20, 'Hello', true);

// // Log a variable
// const x = 100;
// console.log(x);

// // Console error & warning

// console.error('Alert');
// console.warn('Warning');

// // Log object as table
// console.table({ name: 'Brad', email: 'brad@gmail.com' });

// // Group console commands
// console.group('simple');
// console.log(x);
// console.error('Alert');
// console.warn('Warning');
// console.groupEnd();

// // Add CSS to logs
// const styles = 'padding: 10px; background-color: white; color: green';
// console.log('%cHello World', styles);

// let paragraph = document.createElement("p");
// paragraph.textContent = "Learning DOM methods is fun";

// document.body.onload = addElement;

// function addElement() {
// create a new div element
const newDiv = document.createElement("div");

// and give it some content
const newContent = document.createTextNode("Hi there and greetings!");

// add the text node to the newly created div
newDiv.innerHTML(newContent);

// add the newly created element and its content into the DOM
// const currentDiv = document.getElementById("div1");
// document.body.insertBefore(newDiv, currentDiv);
// }



// const numbers = [12, 45, 33, 29, 39];

// let count = 0;
// function counter(arr) {
//   for (let element in arr) {
//     count++;
//   }
//   return count;
// }

// console.log(counter(numbers));
