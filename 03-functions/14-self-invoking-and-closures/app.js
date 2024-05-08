/*NOTE Closure */
// function hello(name) {
//   const text = "Hello, " + name;

//   return function () {
//     console.log(text);
//   }
// }

// const helloJohn = hello("John");

// helloJohn(); // output: "Hello, John"

// console.log(text) // ReferenceError: text is not defined

/*NOTE Self-invoking functions */
// function load() {
//   const divElement = document.querySelector(".name")
//   const data = divElement.textContent

//   console.log(data)
// }

// window.onload = load

// (function () {
//   const divElement = document.querySelector(".name")
//   const data = divElement.textContent

//   console.log(data)

// })();


const displayElement = document.querySelector(".score");

const DisplayController = (function () {
  let _display = displayElement;
  let leftScore = 0
  let rightScore = 0

  const adjustDisplay = () => _displayController.textContent = `${leftScore} : ${rightScore}`;

  const resetDisplay = () => {
    leftScore = 0;
    rightScore = 0;
    adjustDisplay();
  }

  return {
    leftScore, rightScore, adjustDisplay, resetDisplay,
  }
})(displayElement);

DisplayController.leftScore = 2;

console.log(DisplayController.leftScore, DisplayController.rightScore); // output: 2 0

// DisplayController.adjustDisplay(); // the div will show "2 : 0"
//
// DisplayController.resetDisplay();
//
// console.log(DisplayController.leftScore, DisplayController.rightScore); // output: 0 0
//
// console.log(DisplayController._display.textContent); // ReferenceError: _display is not defined
