// Regular function
function sayHello() {
  return "Hello, world!";
}
// Arrow function
const sayHelloArrow = () => "Hello, world!";

// Regular function
function double(x) {
  return x * 2;
}
// Arrow function
const doubleArrow = () => x * 2;

// Regular function
function add(x, y) {
  return x + y;
}
// Arrow function
const addArrow = (x, y) => x + y;

// Regular function
const person = {
  name: "Alice",
  sayHi: function () {
    return "Hi, " + this.name + "!";
  },
};
// Arrow function
const personArrow = {
  name: "John",
  sayHiArrow: () => `Hi, ${this.name}!`,
};
console.log(personArrow.sayHiArrow());

// Regular function
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
numbers.forEach(function (num) {
  doubled.push(num * 2);
});
// Arrow function
const doubledArrow = [];
numbers.forEach((num) => doubledArrow.push(num * 2));
