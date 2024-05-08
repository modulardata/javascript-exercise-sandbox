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
// posNumbers will contain [4, 1, 5, 9]
console.log(posNumbers);
