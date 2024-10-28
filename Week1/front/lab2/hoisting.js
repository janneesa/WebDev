// 1.
function cube(x) {
  return x * x * x;
}

// 2.
function fullName(first, last) {
  return first + " " + last;
}

// 3.
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4.
function sumCubes(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

// Refactored using function expressions
// 1.
const cubeEx = function (x) {
  return x * x * x;
};

// 2.
const fullNameEx = function (first, last) {
  return first + " " + last;
};

// 3.
const powerEx = function (base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};

// 4.
const sumCubesEx = function (numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
};
