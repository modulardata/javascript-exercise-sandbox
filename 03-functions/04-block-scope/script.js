let obj = { key: 'value' };
let jsonString = JSON.stringify(obj);
let parsedObj = JSON.parse(jsonString);
console.log(parsedObj); // Outputs: { key: 'value' }


const x = 100;

// An If statement is a block
if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y);
}

// console.log(y); // ReferenceError: y is not defined

// A loop is a block
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError: i is not defined
//
// Using var
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}
//
console.log(c);
//
// var IS function scoped
function run() {
var d = 100;
console.log(d);
}

run();
/* `run();` is calling the `run` function in the JavaScript code. Inside the `run` function, a variable
`d` is declared using the `var` keyword and assigned a value of 100. The function then logs the
value of `d` to the console. When `run();` is called, it will output `100` to the console. */


// console.log(d);


const foo = 1;
var bar = 2; // Put on the window object
