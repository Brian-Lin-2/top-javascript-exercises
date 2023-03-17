const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
	return a - b;
};

const sum = (numArray) => {
  // Edge case.
  if (numArray.length === 0) {
    return 0;
  }

  const getSum = (total, value) => {
    return total + value;
  };

  return numArray.reduce(getSum);
};

const multiply = (numArray) => {
  const multiplyNum = (total, value) => {
    return total * value;
  };

  return numArray.reduce(multiplyNum);
};

const power = (a, b) => {
  let num = a;

	for (let i = 1; i < b; i++) {
    num *= a;
  }

  return num;
};

const factorial = (num) => {
  // Edge case.
	if (num === 0) {
    return 1;
  }

  let total = 1;

  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
