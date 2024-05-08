/*! with objects*/
// const car1000 = {
//   brand: "Mercedes",
//   year: 2020
// };

// const car1001 = {
//   brand: "Audi",
//   year: 2019
// };


/*NOTE with function constructor */
// function Car(brand, year) {
//   this.brand = brand;
//   this.year = year;
// }

// const car1000 = new Car("Mercedes", 2020);
// const car1001 = new Car("Audi", 2019);

// console.log(car1000);
// console.log(car1001);



/* NOTE Methods in constructor */
function Car(model, speed) {
  this.model = model;
  this.speed = speed;

  this.getSpeed = function () {
    console.log("The speed of " + this.model + " is: " + this.speed + " km per hour");
  };
}

const carKIA = new Car("KIA Stinger", 209);
carKIA.getSpeed();
