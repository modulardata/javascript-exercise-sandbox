// Basic callback
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

// myCalculator(5, 5, myDisplayer);

// Sequence Control

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
// myDisplayer(result);

// Array Operations with Callbacks

const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
document.getElementById("demo").innerHTML = posNumbers;
