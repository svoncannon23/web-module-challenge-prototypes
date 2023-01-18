// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"s
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}


Person.prototype.eat = function (edible){
  if (this.stomach.length <= 10) {
    this.stomach.push(edible);
  }
};

Person.prototype.poop = function () {
  this.stomach = [];
}

Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
}

const kara = new Person('Kara', 9);
const clark = new Person('Clark', 11);
const michael = new Person('Michael', 34)

console.log(kara)
console.log(clark)
console.log(michael)

kara.eat('tacos')
kara.eat('watermelon')
kara.eat('apple')
kara.eat('pizza')
kara.eat('steak')
console.log(kara.stomach)

kara.poop()
console.log(kara.stomach)
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0

}

Car.prototype.fill = function (gallons){
  this.tank += gallons;
}

Car.prototype.drive = function (distance, milesPerGallon) {
  this.odometer.push(distance);
  this.tank;
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;

}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`
}

const lucy = new Baby('Lucy', 3, 'stuffed elephant')
const billy = new Baby('Billy', 4, 'car')

console.log('Lucy', lucy)
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window/Global Object: when in global scope the value of 'this' will be the window object
  2. Implicit Binding: 'this' is to the left of the dot when calling a function
  3. New Binding: When using a contructor function 'this' becomes a new object in this instance that is created and returned by the constructor function.
  4. Explicit binding: when we use the JS call or apply method 'this' is explicitly defined
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
