const numbers = [2, 4, 6, 8, 10];
const doubledNumbers = numbers.map((num) => num * 2);

console.log("Original Numbers:", numbers);
console.log("Doubled Numbers:", doubledNumbers);

const names = ["alice", "bob", "carol"];
const capitalizedNames = names.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1)
);

console.log("Original Names:", names);
console.log("Capitalized Names:", capitalizedNames);
