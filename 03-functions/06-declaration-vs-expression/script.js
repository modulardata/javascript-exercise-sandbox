// let obj = { key: 'value' };
// let jsonString = JSON.stringify(obj);
// let parsedObj = JSON.parse(jsonString);
// console.log(parsedObj); // Outputs: { key: 'value' }


// Function Declaration
// function addDollarSign(value) {
//   return '$' + value;
// }

// // When using declarations, you can invoke the function before the declaration. With expressions, you can not
// console.log(addDollarSign(100));

// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));
